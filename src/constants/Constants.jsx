import { MenuItem } from "@mui/material";

export const TAG_MASTER_SWITCH = "TagMasterSwitch";

/*const local = {
  BASE_URL: "http://localhost:7001/datahub/api",
};
const dev = {
  BASE_URL: "http://localhost:7001/datahub/api",
};
const prod = {
  BASE_URL: "http://localhost:7001/datahub/api",
};

export const config =
  process.env.NODE_ENV === "local"
    ? local
    : process.env.NODE_ENV === "development"
    ? dev
    : prod;*/

/* --- Elenco Trigger ------------------------------------ */

export const TRIGGER_PROCESSES = "triggerProcesses";
export const TRIGGER_JOBS = "triggerJobs";
export const TRIGGER_INJECTORS = "triggerInjectors";
export const TRIGGER_MONITORS = "triggerMonitors";

/* --- Ricerca ------------------------------------------- */

export const TYPE_ENTITIES = "entities";
export const TYPE_INSTANCES = "instances";

/* --- Elenco Istanze Processo --------------------------- */

export const FORCE_STOP_RESULT = -1;
export const FORCE_STOP_DESC = "instanceManualStop";

/* --- Select Component ---------------------------------- */

export const ITEM_HEIGHT = 40;
export const MOBILE_ITEM_HEIGHT = 40;
export const ITEM_PADDING_TOP = 8;
export const MENU_ITEMS = 9; // max num of items shown on screen

/* --- Generic constants --------------------------------- */

// FIXME: aggangia a questa variabile controllo su utente loggato
export const ISADMIN = true;

export const EMPTY_STRING = "";
export const ALL_STRING = "all";

export const OWNER_USER = "User";
export const OWNER_GROUP = "Group";

export const MASTER_SWITCH_OK = "primary";
export const MASTER_SWITCH_WARNING = "warning";
export const MASTER_SWITCH_ERROR = "error";

export const TEXT_HTML = "text/html";
export const TEXT_PLAIN = "text/plain; charset=utf-8";

export const NONE = "NONE";
export const FIXED = "FIXED";
export const INCREMENTAL = "INCREMENTAL";
export const LIMITED_RETRIES = "LIMITED_RETRIES";

export const PROCESS_TO_START_QUEUE = "processToStartQueue";
export const PROCESS_TO_START_QUEUE_BACKUP = "processToStartQueueBackup";
export const AWAIT_WORKERS_COMPLETION_LIST = "awaitWorkersCompletionList";

export const SYSTEM_JOB_TYPE_AWAIT_WORKERS_COMPLETION = "AwaitWorkersCompletionJob";
export const SYSTEM_JOB_TYPE_WORKER_PROCESS_MANAGER = "WorkerProcessManagerJob";
export const SYSTEM_JOB_TYPE_MAINTENANCE = "MaintenanceJob";
export const SYSTEM_JOB_TYPE_CLEANER = "CleanerJob";

export const ORACLE_SOA = "OracleSOA";
export const ORACLE_BPM = "OracleBPM";
export const ORACLE_BPEL = "OracleBPEL";
export const ORACLE_ODI = "OracleODI";
export const APACHE_CAMEL = "ApacheCamel";
export const JAVA_APPLICATION = "JavaApplication";
export const JEE_APPLICATION = "JEEApplication";

export const SYSTEM_MONITOR = "elencoSystemMonitorTitle";
export const CUSTOM_MONITOR = "elencoCustomMonitorTitle";
export const PROCESS_MONITOR = "elencoMonitorProcessiTitle";

export const SYSTEM_MONITOR_ID_PROCESSES_MONITOR = "ProcessesMonitor";

export const PUBLISHED_VALUE_TABLE_TYPE_GENERIC_TABLE = "GenericTable";
export const PUBLISHED_VALUE_TABLE_TYPE_SEPARATED_GENERIC_TABLE = "SeparatedGenericTable";
export const PUBLISHED_VALUE_TABLE_TYPE_FLAT_TABLES = "FlatTables";

export const CAMEL_TASKS_UPDATER_JOB = "CamelTasksUpdaterJob";
export const ODI_TASKS_UPDATER_JOB = "OdiTasksUpdaterJob";

export const ACKNOWLEDGE = "acknowledge";
export const REPROCESS = "reprocess";

export const NUM_LIST = [10, 20, 50, 100, 200];


/* --- Generic objects ----------------------------------- */

export const EMPTY_PROCESS_REQUEST = {
  processId: EMPTY_STRING,
  instanceId: EMPTY_STRING,
  processDesc: EMPTY_STRING,
  partition:ALL_STRING,
  project: ALL_STRING,
  processType: ALL_STRING,
  clusterId: ALL_STRING,
  processTag: ALL_STRING,
  showMonitorEnabled: ALL_STRING,
  onlyVisible: false,
  hasCron: ALL_STRING,
  scheduled: ALL_STRING,
  maxResults: 0,
  onlyRunning: ALL_STRING,
  isExactMatch: false,
};

export const CAMEL_TASKS_JOB_REQUEST = {
  jobId: CAMEL_TASKS_UPDATER_JOB,
  jobType: CAMEL_TASKS_UPDATER_JOB,
  exactMatch: true,
  loadLogs: true,
};

export const ODI_TASKS_JOB_REQUEST = {
  jobId: ODI_TASKS_UPDATER_JOB,
  jobType: ODI_TASKS_UPDATER_JOB,
  exactMatch: true,
  loadLogs: true,
};

export const EMPTY_SEQUENCE_REQUEST = {
  sequenceId: EMPTY_STRING,
  description: EMPTY_STRING,
  consumer: EMPTY_STRING,
  type: ALL_STRING,
};

export const EMPTY_JOB_REQUEST = {
  jobId: null,
  jobDesc: null,
  enabledFlagBoolean: null,
  visible: null,
  isRunning: null,
};

export const EMPTY_REPORT_REQUEST = {
  reportId: null,
  reportDesc: null,
  enabledFlagBoolean: null,
  visible: null,
  running: null,
};

export const EMPTY_USER_REQUEST = {
  username: null,
  description: null,
  isAdmin: null,
  isAuthorized: null,
};

export const EMPTY_VALIDATOR_REQUEST = {
  validatorId: null,
  validatorClass: null,
};

export const EMPTY_TRANSCODER_REQUEST = {
  transcoderId: null,
  transcoderClass: null,
};

export const RESULTS_LIST = NUM_LIST.map((num) => (
  <MenuItem key={num} value={num}>
    {num}
  </MenuItem>
));

/* --- Strumenti objects --------------------------------- */

export const GESTIONE_ERRORI = "utilsGestioneErroriUtility";
export const GESTIONE_AVVISI = "utilsGestioneAvvisiUtility";
export const GESTIONE_CALLBACK = "utilsGestioneCallbackUtility";
export const CONFIGURAZIONE = "utilsElencoPropertiesUtility";
export const CONTROLLO_PULIZIA = "utilsControlPurgeUtility";
export const CONFIG_TRIGGER_ODI = "utilsConfigTriggerOdiUtility";
export const CONFIG_TASK_ODI = "utilsConfigTaskOdiUtility";
export const CONFIG_TASK_SOA = "utilsConfigTaskSoaUtility";
export const ELENCO_CLUSTER = "utilsElencoClusterUtility";
export const ELENCO_CODE = "utilsElencoCodeUtility";
export const ELENCO_CONTROLLORI_AVVIO = "utilsElencoStartConditionsCheckerUtility";
export const ELENCO_INIETTORI = "utilsElencoIniettoriUtility";
export const ELENCO_JOB = "utilsElencoJobUtility";
export const ELENCO_MAIL = "utilsElencoMailDataUtility";
export const ELENCO_PARSER = "utilsElencoParserUtility";
export const ELENCO_PLUGIN = "utilsElencoJarPayloadUtility";
export const ELENCO_REPORT = "utilsElencoReportUtility";
export const ELENCO_SEQUENCE = "utilsElencoSequenceUtility";
export const ELENCO_TAG = "utilsElencoTagUtility";
export const ELENCO_TRANSCODER = "utilsElencoTranscoderUtility";
export const ELENCO_UTENTI = "utilsElencoUtentiUtility";
export const ELENCO_VALIDATORI = "utilsElencoValidatoriUtility";
export const MANUTENZIONE = "utilsManutenzioneUtility";
export const REGISTRO_EVENTI = "utilsElencoUserEventLogUtility";
export const SOA_PROPERTIES_DESERIALIZER = "utilsSoaPropertiesDeSerializer";