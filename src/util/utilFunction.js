import { Tooltip } from "@mui/material";
import {
  ALL_STRING,
  APACHE_CAMEL,
  AWAIT_WORKERS_COMPLETION_LIST,
  EMPTY_STRING,
  JAVA_APPLICATION,
  JEE_APPLICATION,
  ORACLE_BPEL,
  ORACLE_BPM,
  ORACLE_ODI,
  ORACLE_SOA,
  PROCESS_TO_START_QUEUE,
  PROCESS_TO_START_QUEUE_BACKUP,
  PUBLISHED_VALUE_TABLE_TYPE_FLAT_TABLES,
  PUBLISHED_VALUE_TABLE_TYPE_GENERIC_TABLE,
  PUBLISHED_VALUE_TABLE_TYPE_SEPARATED_GENERIC_TABLE,
  SYSTEM_JOB_TYPE_AWAIT_WORKERS_COMPLETION,
  SYSTEM_JOB_TYPE_WORKER_PROCESS_MANAGER,
  TRIGGER_INJECTORS,
  TRIGGER_JOBS,
  TRIGGER_PROCESSES,
} from "../constants/Constants";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";

/* --- General purpose String functions -------------------------------------- */

export const isNullUndefined = (variable) => {
  if (typeof variable === "undefined" || variable === null) {
    return true;
  } else {
    return false;
  }
};

export const toEmpty = (variable) => {
  if (typeof variable === "undefined" || variable === null) return EMPTY_STRING;
  return variable;
};

export const toNull = (variable) => {
  if (typeof variable === "undefined" || variable === null) return null;
  return variable;
};

export const jsonToString = (obj) => {
  return JSON.stringify(obj)
    .replace(/(":")/g, "=")
    .replace(/(",")/g, "\r\n")
    .replace(/({")/g, "")
    .replace(/("})/g, "")
    .replace(/({})/g, "")
    .replace(/("")/g, "");
};

export const isStringEmpty = (s) => {
  return s === EMPTY_STRING;
};

export const isAll = (s) => {
  return s === ALL_STRING;
};

export const paramOrNull = (param, string) => {
  if (param === string) {
    return null;
  }
  return param;
};

export const fetchElementToStart = (type) => {
  if (type === TRIGGER_PROCESSES) {
    return "processToStartId";
  } else if (type === TRIGGER_JOBS) {
    return "jobToStartId";
  } else if (type === TRIGGER_INJECTORS) {
    return "injectorToStartId";
  }
  return "monitorToStartId";
};

/* --- General purpose List functions ---------------------------------------- */

export const isEmpty = (list) => {
  return list === null || typeof list === "undefined" || list.length === 0;
};

export const removeDuplicates = (list) => {
  return list.filter((item, index) => list.indexOf(item) === index);
};

/* --- GestioneWorkers functions --------------------------------------------- */

export const getJobType = (s) => {
  return s === AWAIT_WORKERS_COMPLETION_LIST
    ? SYSTEM_JOB_TYPE_AWAIT_WORKERS_COMPLETION
    : SYSTEM_JOB_TYPE_WORKER_PROCESS_MANAGER;
};

export const isAwaitType = (s) => {
  return s === AWAIT_WORKERS_COMPLETION_LIST;
};

export const isQueue = (s) => {
  return s === PROCESS_TO_START_QUEUE;
};

export const isBackup = (s) => {
  return s === PROCESS_TO_START_QUEUE_BACKUP;
};

export const queueOrBackup = (s) => {
  let response = "";
  isQueue(s)
    ? (response = "queue")
    : isBackup(s)
    ? (response = "backup")
    : (response = "");
  return response;
};

/* --- ProcessType functions ------------------------------------------------- */

export const hasTasks = (s) => {
  return s === APACHE_CAMEL || s === ORACLE_BPM || s === ORACLE_BPEL;
};

export const isOracleSOA = (s) => {
  return s === ORACLE_SOA;
};

export const isApacheCamel = (s) => {
  return s === APACHE_CAMEL;
};

export const isOracleBPM = (s) => {
  return s === ORACLE_BPM;
};

export const isOracleBPEL = (s) => {
  return s === ORACLE_BPEL;
};

export const isOracleODI = (s) => {
  return s === ORACLE_ODI;
};

export const isJavaApplication = (s) => {
  return s === JAVA_APPLICATION;
};

export const isJEEApplication = (s) => {
  return s === JEE_APPLICATION;
};

export const getProcessTypeDescription = (s, list) => {
  for (let item of list) {
    if (s === item.processTypeId) {
      return item.description;
    }
  }
  return EMPTY_STRING;
};

/* --- Elenco processi ------------------------------------------------------- */

export const tagsListToString = (list) => {
  let s = EMPTY_STRING;
  for (let i = 0; i < list.length; i++) {
    s += list[i].tagId;
    if (i < list.length - 1) {
      s += ";";
    }
  }
  return s;
};

/* --- Anagrafica processo --------------------------------------------------- */

export const isGenericPublishedValueTable = (process) => {
  return (
    process.publishedValueTableType === PUBLISHED_VALUE_TABLE_TYPE_GENERIC_TABLE
  );
};

export const isSeparatedGenericPublishedValueTable = (process) => {
  return (
    process.publishedValueTableType ===
    PUBLISHED_VALUE_TABLE_TYPE_SEPARATED_GENERIC_TABLE
  );
};

export const isFlatPublishedValueTable = (process) => {
  return (
    process.publishedValueTableType === PUBLISHED_VALUE_TABLE_TYPE_FLAT_TABLES
  );
};

/* --- List to component functions ------------------------------------------- */

export const stackNotifyToList = (list) => {
  return list.map((item) => <div key={"email_" + item}>{item}</div>);
};

export const stackAssignees = (list) => {
  return list.map((item) => (
    <div key={"assignee_" + item.name}>
      {" "}
      {item.isGroup ? (
        <Tooltip title="Group">
          <GroupsIcon
            size="small"
            style={{ marginBottom: "-5px" }}
            color="secondary"
          />
        </Tooltip>
      ) : (
        <Tooltip title="User">
          <PersonIcon
            size="small"
            style={{ marginBottom: "-5px" }}
            color="secondary"
          />
        </Tooltip>
      )}{" "}
      {item.name}
    </div>
  ));
};

/* --- Log icon style functions ---------------------------------------------- */

export const processLastLogColor = (log, startCheckerStatus) => {
  if (!startCheckerStatus) {
    if (log.hasError) {
      return "error";
    }
    return "default";
  }

  if (!log.hasError && log.processStarted) {
    return "success";
  }

  if (!log.hasError && log.semaphoreLock) {
    return "warning";
  }

  if (!log.hasError && !log.processStarted) {
    return "error";
  }

  if (log.hasError) {
    return "error";
  }

  return "default";
};

export const processLastLogIcon = (log, startCheckerStatus) => {
  if (!startCheckerStatus) {
    if (log.hasError) {
      return "lastLog_error";
    }
    return "lastLog";
  }

  if (!log.hasError && log.processStarted) {
    return "lastLog_started";
  }

  if (!log.hasError && log.semaphoreLock) {
    return "lastLog_semaphoreLock";
  }

  if (!log.hasError && !log.processStarted) {
    return "lastLog_not_started";
  }

  if (log.hasError) {
    return "lastLog_error";
  }

  return "lastLog";
};

export const monitorLastLogColor = (log) => {
  if (log.hasError) {
    return "error";
  }

  if (log.result) {
    return "success";
  }

  return "error";
};

export const monitorLastLogIcon = (log) => {
  if (log.hasError) {
    return "lastLog_error";
  }

  if (log.result) {
    return "lastLog_started";
  }

  return "lastLog_not_started";
};

export const configurationLastLogColor = (log) => {
  if (log.result) {
    return "success";
  }

  return "error";
};

export const configurationLastLogIcon = (log) => {
  if (log.result) {
    return "lastLog_started";
  }

  return "lastLog_not_started";
};
