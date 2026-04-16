export const ROLE_HOST = "HOST";
export const ROLE_ADMIN = "ADMIN";
export const ROLE_WEHRLEITER = "WEHRLEITER (ADMIN)";
export const ROLE_DISPONENT = "DISPONENT";
export const ROLE_EINSATZKRAFT = "EINSATZKRAFT";
export const ROLE_ALARM_DISPLAY = "ALARM DISPLAY";

export const ROLE_OPTIONS = [
  ROLE_HOST,
  ROLE_ADMIN,
  ROLE_WEHRLEITER,
  ROLE_DISPONENT,
  ROLE_EINSATZKRAFT,
  ROLE_ALARM_DISPLAY
];

export const EINSATZSTICHWORTE = [
  {
    gruppe: "Einsatzarten",
    eintraege: [
      "AUSN - Ausnahmezustand",
      "F - Feuer",
      "H - Hilfeleistung",
      "K - Krankentransport",
      "R - Rettungsdiensteinsatz",
      "S - Sonderkomponente / Sonderlage",
      "W - Weiterleitung / sonstiges"
    ]
  },
  {
    gruppe: "Feuer",
    eintraege: [
      "F0 - Einsatz ohne akute Gefahr / ohne Sonderrechte",
      "F1 - Feuer klein",
      "F2 - Feuer mittel",
      "F3 - Feuer groß",
      "F4 - Nachforderung",
      "F5 - Nachforderung",
      "F6 - Nachforderung"
    ]
  },
  {
    gruppe: "Hilfeleistung",
    eintraege: [
      "H0 - Einsatz ohne akute Gefahr / ohne Sonderrechte",
      "H1 - Hilfeleistung klein",
      "H2 - Hilfeleistung mittel",
      "H3 - Hilfeleistung groß",
      "H4 - Nachforderung",
      "H5 - Nachforderung",
      "H6 - Nachforderung"
    ]
  },
  {
    gruppe: "Anhänge",
    eintraege: [
      "Y - Menschenleben in Gefahr",
      "X1 - Gefahrstoff beteiligt",
      "X2 - Gefahrstoff beteiligt / Abdichten / Umfüllen",
      "X3 - Gefahrstoff beteiligt / Fahrzeug mit Warntafel",
      "DL - Hubrettungsfahrzeug erforderlich",
      "BAB - Bundesautobahn",
      "BMA - Objekt mit Feuerwehrplan",
      "POL - Polizeilage"
    ]
  },
  {
    gruppe: "Spezifikationen",
    eintraege: [
      "ABSTURZ - Einsatz an absturzgefährdeten Bereichen",
      "BAHN - Einsatz im Bereich von Bahnanlagen",
      "BETRIEBSSTOFF - Einsatz mit Austritt von Betriebsstoffen",
      "CO - Einsatz mit Austritt von CO",
      "EINSTURZ - Einsatz nach Einsturz / Teileinsturz",
      "ELEKTRO - Einsatz im Bereich von Hochspannungsanlagen",
      "EXPLOSION - Einsatz nach Explosion",
      "FLUG - Einsatz mit Beteiligung eines Luftfahrzeuges",
      "GAS - Einsatz mit Austritt von Gas oder Gasgeruch",
      "GEWÄSSER - Einsatz in oder am Gewässer",
      "HRM - Heimrauchmelder ohne Hinweise auf Gefahren",
      "KADAVER - Einsatz mit toten Tieren",
      "KAMPFMITTEL - Einsatz mit Kampfmitteln",
      "KFZ - Einsatz an einem KFZ",
      "RD - Einsatz zur Unterstützung des Rettungsdienstes",
      "STEILKÜSTE - Einsatz an einer Steilküste oder Steilwand",
      "STURM - Einsatz bei oder nach Sturmereignis",
      "TIER - Einsatz zur Rettung von Tieren",
      "TÜR - Einsatz zur Öffnung einer Tür oder eines Aufzugs",
      "VU - Einsatz nach Verkehrsunfall",
      "VU-BUS - Einsatz nach Verkehrsunfall mit Großfahrzeugen",
      "VU-LKW - Einsatz nach Verkehrsunfall mit Großfahrzeugen > 3,5 t",
      "VU-SL - Einsatz nach Verkehrsunfall mit Seitenlage",
      "VU-TRAM - Einsatz nach Verkehrsunfall mit Straßenbahn",
      "WALD/FLÄCHE - Einsatz im Wald, Fläche oder Grasland",
      "WASSERSCHADEN - Einsatz bei Wasser- / Rohrbruch"
    ]
  },
  {
    gruppe: "Rettungsdiensteinsatz",
    eintraege: [
      "R0 - Einsatz ohne Sonderrechte",
      "R1 - Einsatz mit Sonderrechten",
      "R2 - Einsatz mit Sonderrechten",
      "R3 - Einsatz mit Sonderrechten",
      "R4 - Einsatz mit Sonderrechten",
      "R1N1 - 1 Patient / 1 Notarzt erforderlich",
      "R2N2 - 2 Patienten / 2 Notärzte erforderlich",
      "R3N3 - 3 Patienten / 3 Notärzte erforderlich",
      "R4N4 - 4 Patienten / 4 Notärzte erforderlich"
    ]
  },
  {
    gruppe: "Suffixe",
    eintraege: [
      "A - ansteckend / infektiös",
      "B - Bodengebunden ITW/NAW",
      "E - Eigenschutz beachten",
      "H - Heimbeatmung",
      "INK - Inkubatortransport",
      "L - Luftgebunden / ITH / RTH",
      "S - Schwerlasttransport",
      "POL - Polizeilage"
    ]
  },
  {
    gruppe: "Krankentransport",
    eintraege: [
      "K - Krankentransport",
      "K-DIA - Krankentransport mit Dialysepatient"
    ]
  },
  {
    gruppe: "Massenanfall",
    eintraege: [
      "MANV 10",
      "MANV 20",
      "MANV 30",
      "MANV 40",
      "MANV 50",
      "MANV 60",
      "MANV 70",
      "MANV 80",
      "MANV 90",
      "MANV 100",
      "MANV 125",
      "MANV 150",
      "MANV 175",
      "MANV 200",
      "MANV 250",
      "MANV 300",
      "MANV 400",
      "MANV 500"
    ]
  },
  {
    gruppe: "Sonderkomponenten",
    eintraege: [
      "S Amt-FüUst - Führungsunterstützungseinheit",
      "S Kat-FüUstgGr - Führungsunterstützungsgruppe",
      "S Kat-ErkTr-L - Erkundungstrupp Luft",
      "S Kat-ELZ - Erweiterter Löschzug",
      "S Kat-SanZ - Sanitätszug",
      "S Kat-SanGr1 - Sanitätsgruppe 1",
      "S Kat-SanGr2 - Sanitätsgruppe 2",
      "S Kat-SanPtGr - Patiententransportgruppe",
      "S Kat-LogGr - Logistikgruppe",
      "S Kat-PSNV-B-Tr - PSNV für Betroffene",
      "S Kat-PSNV-E-Tr - PSNV für Einsatzkräfte",
      "S Kat-BtZ - Betreuungszug",
      "S Kat-BtGr1 - Betreuungsgruppe 1",
      "S Kat-BtGr2 - Betreuungsgruppe 2",
      "S Kat-BtVGr - Verpflegungsgruppe",
      "S Kat-CBRN-Z - CBRN-Zug",
      "S Kat-CBRN-UStGr - CBRN Unterstützungsgruppe",
      "S Kat-CBRN-DekonSt - Dekontaminationsstaffel",
      "S Kat-CBRN-GfGTr - Gefahrguttrupp",
      "S Kat-CBRN-MTr - Messtrupp",
      "S Kat-WGfZ - Wassergefahrenzug",
      "S Kat-RegE - Registrierungseinheit",
      "S MTF11 - Medical Task Force 11",
      "S MTF12 - Medical Task Force 12",
      "S MTF13 - Medical Task Force 13",
      "S MTF11PtGr - Patiententransportgruppe MTF 11",
      "S MTF12PtGr - Patiententransportgruppe MTF 12",
      "S MTF13PtGr - Patiententransportgruppe MTF 13",
      "KWF - Kreiswehrführung"
    ]
  },
  {
    gruppe: "Ausnahmezustand",
    eintraege: [
      "AUSN - Ausnahmezustand"
    ]
  }
];

const ROLE_MIGRATION_MAP = {
  Host: ROLE_HOST,
  Admin: ROLE_ADMIN,
  Einsatzleiter: ROLE_WEHRLEITER,
  Disponent: ROLE_DISPONENT,
  Einsatzfahrzeug: ROLE_EINSATZKRAFT,
  AD: ROLE_ALARM_DISPLAY
};

const DEFAULT_VEHICLES = [];
const DEFAULT_GROUPS = [];
const DEFAULT_ALARM = {
  einsatzNr: "",
  stichwort: "",
  ort: "",
  info: "",
  status: "Inaktiv",
  prioritaet: "",
  bearbeiter: "",
  callerName: "",
  callerPhone: "",
  objekt: "",
  units: [],
  groups: [],
  lat: 0,
  lon: 0,
  stationId: null,
  updatedAt: new Date().toISOString()
};

const DEFAULT_STATUS_HISTORY = [];

export const VEHICLE_STORAGE_KEY = "fire_dispatcher_vehicles";
export const ALARM_STORAGE_KEY = "fire_dispatcher_alarm";
export const GROUP_STORAGE_KEY = "fire_dispatcher_groups";
export const ACCOUNT_STORAGE_KEY = "fire_dispatcher_accounts";
export const STATION_STORAGE_KEY = "fire_dispatcher_stations";
export const CURRENT_USER_STORAGE_KEY = "fire_dispatcher_current_user";
export const NEWS_STORAGE_KEY = "fire_dispatcher_news";
export const STATUS_HISTORY_STORAGE_KEY = "fire_dispatcher_status_history";
const STORAGE_RESET_KEY = "fire_dispatcher_reset_v5";

const STATUS_MAP = {
  1: { label: "Einsatzbereit Funk", className: "status-ready", shortLabel: "1" },
  2: { label: "Auf Wache", className: "status-ready", shortLabel: "2" },
  3: { label: "Einsatz übernommen", className: "status-enroute", shortLabel: "3" },
  4: { label: "Einsatzstelle", className: "status-scene", shortLabel: "4" },
  5: { label: "Sprechwunsch", className: "status-enroute", shortLabel: "5" },
  6: { label: "Nicht einsatzbereit", className: "status-idle", shortLabel: "6" },
  7: { label: "Patient aufgenommen", className: "status-scene", shortLabel: "7" },
  8: { label: "Ziel erreicht", className: "status-idle", shortLabel: "8" }
};

const DEMO_USERS = [
  { username: "Jaemy", role: [ROLE_HOST], station: "System" },
  { username: "Admin Nord", role: [ROLE_ADMIN], station: "Adminbereich Nord" },
  { username: "Muster Wehrleiter", role: [ROLE_WEHRLEITER], station: "Feuerwehr Erfurt-Mitte" },
  { username: "Leitstelle Mitte", role: [ROLE_DISPONENT], station: "Feuerwehr Erfurt-Mitte" },
  { username: "Florian 01/11/01", role: [ROLE_EINSATZKRAFT], station: "Feuerwehr Erfurt-Mitte" },
  { username: "Anzeige Mitte", role: [ROLE_ALARM_DISPLAY], station: "Feuerwehr Erfurt-Mitte" }
];

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function nowIso() {
  return new Date().toISOString();
}

function normalizeRole(role) {
  return ROLE_MIGRATION_MAP[role] || role || ROLE_EINSATZKRAFT;
}

function normalizeRoles(roles) {
  const source = Array.isArray(roles) ? roles : [roles];
  return source.map((role) => normalizeRole(role));
}

function normalizeStation(station) {
  return {
    ...station,
    ownerAdminId: station.ownerAdminId || null,
    logoDataUrl: station.logoDataUrl || "",
    alarmAutoClearSeconds: Number.isFinite(Number(station.alarmAutoClearSeconds))
      ? Number(station.alarmAutoClearSeconds)
      : 300
  };
}

function normalizeAlarm(alarm) {
  return {
    ...clone(DEFAULT_ALARM),
    ...alarm,
    updatedAt: alarm?.updatedAt || nowIso()
  };
}

function ensureSeedData() {
  if (localStorage.getItem(STORAGE_RESET_KEY)) {
    return;
  }

  // Initialize with empty data - users will be created via Firebase
  writeJson(VEHICLE_STORAGE_KEY, DEFAULT_VEHICLES);
  writeJson(GROUP_STORAGE_KEY, DEFAULT_GROUPS);
  writeJson(ACCOUNT_STORAGE_KEY, []);
  writeJson(STATION_STORAGE_KEY, []);
  writeJson(CURRENT_USER_STORAGE_KEY, {});
  writeJson(NEWS_STORAGE_KEY, []);
  writeJson(ALARM_STORAGE_KEY, normalizeAlarm(DEFAULT_ALARM));
  writeJson(STATUS_HISTORY_STORAGE_KEY, DEFAULT_STATUS_HISTORY);
  localStorage.setItem(STORAGE_RESET_KEY, "done");
}

ensureSeedData();

export function getAccounts() {
  return readJson(ACCOUNT_STORAGE_KEY, []).map((account) => ({
    ...account,
    role: normalizeRole(account.role)
  }));
}

export function saveAccounts(accounts) {
  writeJson(ACCOUNT_STORAGE_KEY, accounts.map((account) => ({
    ...account,
    role: normalizeRole(account.role)
  })));
  recalculateStationStats();
}

export function getStations() {
  return readJson(STATION_STORAGE_KEY, []).map((station) => normalizeStation(station));
}

export function saveStations(stations) {
  writeJson(STATION_STORAGE_KEY, stations.map((station) => normalizeStation(station)));
}

function migrateStoredData() {
  saveAccounts(getAccounts());
  saveStations(getStations());

  const currentUser = readJson(CURRENT_USER_STORAGE_KEY, null);
  if (currentUser) {
    setCurrentUser({ ...currentUser, role: normalizeRole(currentUser.role) });
  }

  const storedRoles = readJson("roles", []);
  writeJson("roles", normalizeRoles(storedRoles));

  const vehicles = readJson(VEHICLE_STORAGE_KEY, DEFAULT_VEHICLES).map((vehicle) => ({
    ...vehicle,
    stationId: vehicle.stationId || findStationIdByName(vehicle.station) || null
  }));
  saveVehicles(vehicles, false);

  const groups = readJson(GROUP_STORAGE_KEY, DEFAULT_GROUPS).map((group) => ({
    ...group,
    stationId: group.stationId || inferGroupStationId(group.vehicleIds)
  }));
  saveGroups(groups);

  const alarm = readJson(ALARM_STORAGE_KEY, DEFAULT_ALARM);
  saveCurrentAlarm(normalizeAlarm(alarm));

  writeJson(STATUS_HISTORY_STORAGE_KEY, readJson(STATUS_HISTORY_STORAGE_KEY, DEFAULT_STATUS_HISTORY));
  recalculateStationStats();
}

function recalculateStationStats() {
  const accounts = getAccounts();
  const vehicles = getVehicles();
  saveStations(getStations().map((station) => ({
    ...station,
    members: accounts.filter((account) => account.stationId === station.id).length,
    vehicleCount: vehicles.filter((vehicle) => vehicle.stationId === station.id).length
  })));
}

function inferGroupStationId(vehicleIds = []) {
  const firstVehicle = getVehicles().find((vehicle) => vehicleIds.includes(vehicle.id));
  return firstVehicle?.stationId || null;
}

function findStationIdByName(name) {
  return getStations().find((station) => station.name === name)?.id || null;
}

migrateStoredData();

function getStoredRoles() {
  return readJson("roles", []);
}

export function setRoles(roles) {
  writeJson("roles", normalizeRoles(roles));
}

export function setCurrentUser(user) {
  writeJson(CURRENT_USER_STORAGE_KEY, { ...user, role: normalizeRole(user.role) });
}

export function getCurrentUser() {
  return readJson(CURRENT_USER_STORAGE_KEY, {
    id: "acc-host",
    name: "Jaemy",
    role: ROLE_HOST,
    stationId: null,
    email: "host@fire-dispatcher.local"
  });
}

export function logout() {
  localStorage.removeItem("roles");
  localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  window.location.href = "index.html";
}

export function activateDemoLogin(roles) {
  const normalized = normalizeRoles(roles);
  const targetRole = normalized[0];
  setRoles(normalized);

  const currentAccount = getAccounts().find((account) => account.role === targetRole);
  if (currentAccount) {
    setCurrentUser(currentAccount);
  } else {
    setCurrentUser({ id: `demo-${Date.now()}`, name: targetRole, role: targetRole, stationId: null, email: "" });
  }

  window.location.href = "dashboard.html";
}

export function requireAnyRole(allowedRoles) {
  const roles = getStoredRoles();
  if (!roles.length) {
    return true;
  }
  return allowedRoles.some((role) => roles.includes(role));
}

export function enforcePageAccess(allowedRoles) {
  if (!requireAnyRole(allowedRoles)) {
    window.location.href = "dashboard.html";
    return false;
  }
  return true;
}

export function isHost(user = getCurrentUser()) {
  return user.role === ROLE_HOST;
}

export function isAdmin(user = getCurrentUser()) {
  return user.role === ROLE_ADMIN;
}

export function isWehrleiter(user = getCurrentUser()) {
  return user.role === ROLE_WEHRLEITER;
}

export function getManagedStations(user = getCurrentUser()) {
  if (isHost(user)) {
    return getStations();
  }
  if (isAdmin(user)) {
    return getStations().filter((station) => station.ownerAdminId === user.id);
  }
  if (isWehrleiter(user)) {
    return getStations().filter((station) => station.id === user.stationId);
  }
  return user.stationId ? getStations().filter((station) => station.id === user.stationId) : [];
}

export function getManagedStationIds(user = getCurrentUser()) {
  return getManagedStations(user).map((station) => station.id);
}

export function getVisibleAccounts(user = getCurrentUser()) {
  if (isHost(user)) {
    return getAccounts();
  }
  if (isAdmin(user)) {
    const stationIds = new Set(getManagedStationIds(user));
    return getAccounts().filter((account) =>
      account.id === user.id || (account.stationId && stationIds.has(account.stationId))
    );
  }
  if (isWehrleiter(user)) {
    return getAccounts().filter((account) => account.stationId === user.stationId);
  }
  return [];
}

export function getVisibleNews(user = getCurrentUser()) {
  const allNews = getNews();
  if (isHost(user)) {
    return allNews;
  }
  if (isAdmin(user)) {
    const stationIds = new Set(getManagedStationIds(user));
    return allNews.filter((item) => item.stationId === null || stationIds.has(item.stationId));
  }
  if (user.stationId) {
    return allNews.filter((item) => item.stationId === null || item.stationId === user.stationId);
  }
  return allNews.filter((item) => item.stationId === null);
}

export function getRoleLabel(role) {
  return normalizeRole(role);
}

export function attachClock(timeId, dateId) {
  const timeNode = document.getElementById(timeId);
  const dateNode = document.getElementById(dateId);
  if (!timeNode) {
    return;
  }

  const updateClock = () => {
    const now = new Date();
    timeNode.textContent = now.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    if (dateNode) {
      dateNode.textContent = now.toLocaleDateString("de-DE", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    }
  };

  updateClock();
  setInterval(updateClock, 1000);
}

export function formatUpdatedAt(value) {
  const date = value ? new Date(value) : new Date();
  return date.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

export function getStatusOptions() {
  return Object.entries(STATUS_MAP).map(([value, meta]) => ({
    value: Number(value),
    label: `${value} - ${meta.label}`
  }));
}

export function getStatusInfo(status) {
  return STATUS_MAP[status] || STATUS_MAP[6];
}

export function getVehicles(stationId = null) {
  const vehicles = readJson(VEHICLE_STORAGE_KEY, clone(DEFAULT_VEHICLES));
  if (!stationId) {
    return vehicles;
  }
  return vehicles.filter((vehicle) => vehicle.stationId === stationId);
}

export function saveVehicles(vehicles, recalc = true) {
  writeJson(VEHICLE_STORAGE_KEY, vehicles);
  if (recalc) {
    recalculateStationStats();
  }
}

export function addVehicle(vehicle) {
  const vehicles = getVehicles();
  vehicles.push({
    id: `veh-${Date.now()}`,
    name: vehicle.name,
    station: vehicle.station,
    stationId: vehicle.stationId || null,
    crew: vehicle.crew || "",
    type: vehicle.type || "",
    status: Number(vehicle.status) || 2
  });
  saveVehicles(vehicles);
  pushStatusHistory({
    stationId: vehicle.stationId,
    vehicleName: vehicle.name,
    status: Number(vehicle.status) || 2,
    type: "Fahrzeug angelegt",
    operator: getCurrentUser().name || "System",
    message: `${vehicle.name} wurde angelegt.`
  });
  return vehicles;
}

export function deleteVehicle(vehicleId) {
  const vehicle = getVehicles().find((entry) => entry.id === vehicleId);
  const vehicles = getVehicles().filter((entry) => entry.id !== vehicleId);
  const groups = getGroups().map((group) => ({
    ...group,
    vehicleIds: group.vehicleIds.filter((id) => id !== vehicleId)
  }));
  saveVehicles(vehicles);
  saveGroups(groups);
  if (vehicle) {
    pushStatusHistory({
      stationId: vehicle.stationId,
      vehicleName: vehicle.name,
      status: vehicle.status,
      type: "Fahrzeug gelöscht",
      operator: getCurrentUser().name || "System",
      message: `${vehicle.name} wurde gelöscht.`
    });
  }
  return vehicles;
}

export function updateVehicleStatus(vehicleId, status, operator = null) {
  const vehicles = getVehicles();
  const currentVehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
  const nextVehicles = vehicles.map((vehicle) =>
    vehicle.id === vehicleId ? { ...vehicle, status: Number(status) } : vehicle
  );
  saveVehicles(nextVehicles);

  if (currentVehicle) {
    pushStatusHistory({
      stationId: currentVehicle.stationId,
      vehicleName: currentVehicle.name,
      status: Number(status),
      type: "Statusänderung",
      operator: operator || getCurrentUser().name || "System",
      message: `Status ${Number(status)} - ${getStatusInfo(Number(status)).label}`
    });
  }

  return nextVehicles;
}

export function getGroups(stationId = null) {
  const groups = readJson(GROUP_STORAGE_KEY, clone(DEFAULT_GROUPS));
  if (!stationId) {
    return groups;
  }
  return groups.filter((group) => group.stationId === stationId);
}

export function saveGroups(groups) {
  writeJson(GROUP_STORAGE_KEY, groups);
}

export function addGroup(group) {
  const groups = getGroups();
  groups.push({
    id: `grp-${Date.now()}`,
    name: group.name,
    stationId: group.stationId || null,
    vehicleIds: group.vehicleIds || []
  });
  saveGroups(groups);
  return groups;
}

export function deleteGroup(groupId) {
  const groups = getGroups().filter((group) => group.id !== groupId);
  saveGroups(groups);
  return groups;
}

export function getCurrentAlarm() {
  return normalizeAlarm(readJson(ALARM_STORAGE_KEY, clone(DEFAULT_ALARM)));
}

export function saveCurrentAlarm(alarm) {
  writeJson(ALARM_STORAGE_KEY, normalizeAlarm(alarm));
}

export function getAccountsByRole(role) {
  return getAccounts().filter((account) => account.role === role);
}

export function addAccount(account) {
  const accounts = getAccounts();
  accounts.push({
    id: `acc-${Date.now()}`,
    name: account.name,
    role: normalizeRole(account.role),
    stationId: account.stationId || null,
    email: account.email || ""
  });
  saveAccounts(accounts);
  return accounts;
}

export function updateAccount(accountId, updates) {
  const accounts = getAccounts().map((account) =>
    account.id === accountId
      ? {
          ...account,
          ...updates,
          role: updates.role ? normalizeRole(updates.role) : account.role
        }
      : account
  );
  saveAccounts(accounts);

  const currentUser = getCurrentUser();
  if (currentUser.id === accountId) {
    const updatedCurrentUser = accounts.find((account) => account.id === accountId);
    if (updatedCurrentUser) {
      setCurrentUser(updatedCurrentUser);
      setRoles([updatedCurrentUser.role]);
    }
  }
  return accounts;
}

export function deleteAccount(accountId) {
  const account = getAccounts().find((entry) => entry.id === accountId);
  const accounts = getAccounts().filter((entry) => entry.id !== accountId);
  saveAccounts(accounts);
  if (account?.role === ROLE_ADMIN) {
    getStations()
      .filter((station) => station.ownerAdminId === accountId)
      .forEach((station) => deleteStation(station.id));
  }
  return accounts;
}

export function addStation(station) {
  const stationId = `station-${Date.now()}`;
  const stations = getStations();
  stations.push({
    id: stationId,
    name: station.name,
    code: station.code,
    members: 0,
    vehicleCount: 0,
    logoDataUrl: station.logoDataUrl || "",
    alarmAutoClearSeconds: Number(station.alarmAutoClearSeconds) || 300,
    ownerAdminId: station.ownerAdminId || null
  });
  saveStations(stations);

  if (station.wehrleiterName) {
    addAccount({
      name: station.wehrleiterName,
      email: station.wehrleiterEmail || "",
      role: ROLE_WEHRLEITER,
      stationId
    });
  }
  return getStations();
}

export function updateStation(stationId, updates) {
  const stations = getStations().map((station) =>
    station.id === stationId ? { ...station, ...updates } : station
  );
  saveStations(stations);
  return stations;
}

export function deleteStation(stationId) {
  saveStations(getStations().filter((station) => station.id !== stationId));
  saveAccounts(getAccounts().filter((account) => account.stationId !== stationId));
  saveVehicles(getVehicles().filter((vehicle) => vehicle.stationId !== stationId));
  saveGroups(getGroups().filter((group) => group.stationId !== stationId));
}

export function getNews() {
  return readJson(NEWS_STORAGE_KEY, []);
}

export function saveNews(news) {
  writeJson(NEWS_STORAGE_KEY, news);
}

export function addNews(item) {
  const news = getNews();
  news.unshift({
    id: `news-${Date.now()}`,
    title: item.title,
    body: item.body,
    stationId: item.stationId ?? null,
    author: item.author,
    createdAt: nowIso()
  });
  saveNews(news);
  return news;
}

export function deleteNews(newsId) {
  saveNews(getNews().filter((item) => item.id !== newsId));
  return getNews();
}

export function getStatusHistory(stationIds = null) {
  const history = readJson(STATUS_HISTORY_STORAGE_KEY, DEFAULT_STATUS_HISTORY);
  if (!stationIds || !stationIds.length) {
    return history;
  }
  const idSet = new Set(stationIds);
  return history.filter((entry) => entry.stationId && idSet.has(entry.stationId));
}

export function pushStatusHistory(entry) {
  const history = getStatusHistory();
  history.unshift({
    id: `status-${Date.now()}`,
    createdAt: nowIso(),
    stationId: entry.stationId || null,
    vehicleName: entry.vehicleName || "Unbekannt",
    status: Number(entry.status) || 6,
    type: entry.type || "Statusänderung",
    operator: entry.operator || "System",
    message: entry.message || ""
  });
  writeJson(STATUS_HISTORY_STORAGE_KEY, history.slice(0, 200));
  return history;
}

export function resolveVehiclesFromSelection(groupIds, vehicleIds, stationId = null) {
  const vehicles = getVehicles(stationId);
  const groups = getGroups(stationId);
  const selectedIds = new Set(vehicleIds);

  groups
    .filter((group) => groupIds.includes(group.id))
    .forEach((group) => group.vehicleIds.forEach((id) => selectedIds.add(id)));

  return vehicles.filter((vehicle) => selectedIds.has(vehicle.id));
}

export function getStationName(stationId) {
  return getStations().find((station) => station.id === stationId)?.name || "Keine Wehr";
}

export function getOwnerAdminName(ownerAdminId) {
  return getAccounts().find((account) => account.id === ownerAdminId)?.name || "Nicht zugeordnet";
}

export function renderVehicleList(target, vehicles) {
  if (!target) {
    return;
  }
  if (!vehicles.length) {
    target.innerHTML = '<div class="empty-state">Keine Fahrzeuge vorhanden.</div>';
    return;
  }
  target.innerHTML = vehicles.map((vehicle) => {
    const status = getStatusInfo(vehicle.status);
    return `
      <div class="vehicle-card">
        <div class="vehicle-main">
          <strong>${vehicle.name}</strong>
          <span>${vehicle.type || "Fahrzeug"} · ${vehicle.station || "Unbekannte Wache"} · Besatzung ${vehicle.crew || "-"}</span>
        </div>
        <div class="vehicle-status ${status.className}">${vehicle.status} - ${status.label}</div>
      </div>
    `;
  }).join("");
}

export function renderUsers(target, users) {
  if (!target) {
    return;
  }
  target.innerHTML = users.map((user) => {
    const roles = Array.isArray(user.role) ? user.role : [user.role];
    return `
      <div class="user-card">
        <strong>${user.username || user.name || "Ohne Namen"}</strong>
        <span>${user.station || getStationName(user.stationId) || "Keine Zuordnung"}</span>
        <div class="role-list">
          ${roles.map((role) => `<span class="tag">${role}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");
}

export function getDemoUsers() {
  return clone(DEMO_USERS);
}

// ========== SECURITY FUNCTIONS ==========

// Validate email format
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
export function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return input;
  }
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Validate and sanitize user data
export function validateUserData(data) {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name muss mindestens 2 Zeichen lang sein");
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push("Ungültige Email-Adresse");
  }
  
  if (data.password && data.password.length < 6) {
    errors.push("Passwort muss mindestens 6 Zeichen lang sein");
  }
  
  if (!data.role || !ROLE_OPTIONS.includes(data.role)) {
    errors.push("Ungültige Rolle");
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// Safe logging for security events
export function logSecurityEvent(eventType, details = {}) {
  const timestamp = nowIso();
  const user = getCurrentUser();
  
  console.warn(`[SECURITY] ${timestamp} - ${eventType}`, {
    userId: user?.id,
    userRole: user?.role,
    ...details
  });
  
  // In production, send to logging service
  // sendToLoggingService({ eventType, timestamp, user, details });
}

// Validate page access and log attempts
export function validatePageAccess(requiredRoles) {
  if (!requireAnyRole(requiredRoles)) {
    logSecurityEvent("UNAUTHORIZED_PAGE_ACCESS", {
      requiredRoles,
      userRole: getCurrentUser()?.role,
      page: window.location.pathname
    });
    return false;
  }
  return true;
}
