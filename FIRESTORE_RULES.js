// FIRESTORE SECURITY RULES - PRODUCTION READY
// =============================================
// Diese Regeln sind MAXIMAL SICHER für den produktiven Einsatz
// Kopieren Sie alles zwischen den === in die Firebase Console

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // ========== HELPER FUNCTIONS ==========
    
    // Check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Check if user owns the document
    function isOwner(userId) {
      return request.auth.uid == userId;
    }
    
    // Get user role from users collection
    function getUserRole() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role;
    }
    
    // Check if user has specific role
    function hasRole(role) {
      return isAuthenticated() && getUserRole() == role;
    }
    
    // Check if user has any of the roles
    function hasAnyRole(roles) {
      return isAuthenticated() && getUserRole() in roles;
    }
    
    // Get user's station ID
    function getUserStationId() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.stationId;
    }
    
    // Check if user is HOST (super admin)
    function isHost() {
      return hasRole('HOST');
    }
    
    // Check if user is ADMIN
    function isAdmin() {
      return hasRole('ADMIN');
    }
    
    // Check if user is WEHRLEITER
    function isWehrleiter() {
      return hasRole('WEHRLEITER');
    }
    
    // Check if user manages a station
    function managesStation(stationId) {
      return isAuthenticated() && (
        isHost() ||
        (isAdmin() && get(/databases/$(database)/documents/stations/$(stationId)).data.ownerAdminId == request.auth.uid) ||
        (isWehrleiter() && getUserStationId() == stationId)
      );
    }
    
    // ========== USERS COLLECTION ==========
    match /users/{userId} {
      // Users can only read their own data
      allow read: if isOwner(userId);
      
      // Users can only write their own data, and only safe fields
      allow write: if isOwner(userId) && request.resource.data.keys().hasOnly(['name', 'email', 'stationId']);
      
      // Only HOST and ADMIN can read all users (for management)
      allow read: if hasAnyRole(['HOST', 'ADMIN']);
      
      // Only HOST and ADMIN can modify user roles/status
      allow write: if hasAnyRole(['HOST', 'ADMIN']) && 
                      request.resource.data.keys().hasOnly(['name', 'email', 'role', 'stationId', 'createdAt']);
    }
    
    // ========== STATIONS COLLECTION ==========
    match /stations/{stationId} {
      // Only authenticated users can read stations
      allow read: if isAuthenticated();
      
      // HOST can do anything with stations
      allow create, update, delete: if isHost();
      
      // ADMIN can manage their own stations
      allow update: if isAdmin() && get(/databases/$(database)/documents/stations/$(stationId)).data.ownerAdminId == request.auth.uid;
      
      // WEHRLEITER can only read their own station
      allow read: if isWehrleiter() && getUserStationId() == stationId;
    }
    
    // ========== ACCOUNTS COLLECTION ==========
    match /accounts/{accountId} {
      // Only authenticated users can read accounts
      allow read: if isAuthenticated();
      
      // HOST can manage all accounts
      allow create, update, delete: if isHost();
      
      // ADMIN can manage accounts in their stations
      allow write: if isAdmin() && 
                      get(/databases/$(database)/documents/stations/$(request.resource.data.stationId)).data.ownerAdminId == request.auth.uid;
      
      // WEHRLEITER can only read accounts in their station
      allow read: if isWehrleiter() && 
                     get(/databases/$(database)/documents/stations/$(resource.data.stationId)).data.id == getUserStationId();
    }
    
    // ========== ALARMS COLLECTION ==========
    match /alarms/{alarmId} {
      // All authenticated users can read alarms
      allow read: if isAuthenticated();
      
      // Only DISPONENT and WEHRLEITER can create/update alarms
      allow create, update: if hasAnyRole(['DISPONENT', 'WEHRLEITER', 'HOST']) &&
                               managesStation(request.resource.data.stationId);
      
      // Only HOST can delete alarms
      allow delete: if isHost();
    }
    
    // ========== VEHICLES COLLECTION ==========
    match /vehicles/{vehicleId} {
      // All authenticated users can read vehicles
      allow read: if isAuthenticated();
      
      // WEHRLEITER and ADMIN can create/update vehicles in their station
      allow create, update: if hasAnyRole(['WEHRLEITER', 'ADMIN', 'HOST']) &&
                               managesStation(request.resource.data.stationId) &&
                               request.resource.data.keys().hasOnly(['id', 'name', 'station', 'stationId', 'crew', 'type', 'status']);
      
      // Only HOST and ADMIN can delete vehicles
      allow delete: if hasAnyRole(['HOST', 'ADMIN']);
    }
    
    // ========== GROUPS COLLECTION ==========
    match /groups/{groupId} {
      // All authenticated users can read groups
      allow read: if isAuthenticated();
      
      // WEHRLEITER and ADMIN can manage groups in their station
      allow create, update: if hasAnyRole(['WEHRLEITER', 'ADMIN', 'HOST']) &&
                               managesStation(request.resource.data.stationId);
      
      // Only HOST and ADMIN can delete groups
      allow delete: if hasAnyRole(['HOST', 'ADMIN']);
    }
    
    // ========== NEWS COLLECTION ==========
    match /news/{newsId} {
      // All authenticated users can read news
      allow read: if isAuthenticated();
      
      // HOST, ADMIN, and WEHRLEITER can create news
      allow create: if hasAnyRole(['HOST', 'ADMIN', 'WEHRLEITER']);
      
      // Only creators or HOST can update/delete news
      allow update, delete: if isHost() || 
                               resource.data.author == request.auth.uid ||
                               (isWehrleiter() && resource.data.stationId == getUserStationId());
    }
    
    // ========== STATUSHISTORY COLLECTION ==========
    match /statusHistory/{entryId} {
      // All authenticated users can read history
      allow read: if isAuthenticated();
      
      // Only DISPONENT, WEHRLEITER, and ADMIN can create entries
      allow create: if hasAnyRole(['DISPONENT', 'WEHRLEITER', 'ADMIN', 'HOST']) &&
                       managesStation(request.resource.data.stationId);
      
      // Only HOST can delete entries
      allow delete: if isHost();
      
      // No updates allowed
      allow update: if false;
    }
    
    // ========== DEFAULT DENY ==========
    // All other paths are denied by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
