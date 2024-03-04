import { useResetRecoilState } from "recoil";
import { tabDettagliProcesso } from "../../atoms/atomsDettagliProcesso";
import { filtersElencoIstanzeProcesso } from "../../atoms/atomsElencoIstanzeProcesso";
import { filtersElencoTranscodifiche } from "../../atoms/atomsElencoTranscodifiche";
import { filtersMasterSwitch } from "../../atoms/atomsMasterSwitch";
import {
  tabMonitorCustom,
  tabMonitorProcessi,
  tabMonitorSistema,
} from "../../atoms/atomsMonitor";
import { conditionsRicerca, filtersRicerca } from "../../atoms/atomsRicerca";
import { componentStrumenti } from "../../atoms/atomsStrumenti";
import {
  atomsStrumentiConfigTaskOdi,
  atomsStrumentiConfigTaskSoa,
  atomsStrumentiConfigTriggerOdi,
  atomsStrumentiConfigurazione,
  atomsStrumentiControlloPulizia,
  atomsStrumentiElencoCluster,
  atomsStrumentiElencoCode,
  atomsStrumentiElencoControlloriAvvio,
  atomsStrumentiElencoIniettori,
  atomsStrumentiElencoJob,
  atomsStrumentiElencoMail,
  atomsStrumentiElencoParser,
  atomsStrumentiElencoPlugin,
  atomsStrumentiElencoReport,
  atomsStrumentiElencoSequence,
  atomsStrumentiElencoTag,
  atomsStrumentiElencoTranscoder,
  atomsStrumentiElencoUtenti,
  atomsStrumentiElencoValidatori,
  atomsStrumentiGestioneCallBack,
  atomsStrumentiRegistroEventi,
  atomsStrumentiSoaPropriertiesDeSerializer,
} from "../../atoms/atomsStrumentiAllTabs";

export const useResetAllRecoil = () => {
  const resetFiltersElencoIstanzeProcesso = useResetRecoilState(
    filtersElencoIstanzeProcesso
  );
  const resetFiltersElencoTranscodifiche = useResetRecoilState(
    filtersElencoTranscodifiche
  );
  const resetFiltersRicerca = useResetRecoilState(filtersRicerca);
  const resetConditionsRicerca = useResetRecoilState(conditionsRicerca);
  const resetTabDettagliProcesso = useResetRecoilState(tabDettagliProcesso);
  const resetComponent = useResetRecoilState(componentStrumenti);
  const resetFiltersMasterSwitch = useResetRecoilState(filtersMasterSwitch);

  const resetRecoilTabMonitorSistema = useResetRecoilState(tabMonitorSistema);
  const resetRecoilTabMonitorCustom = useResetRecoilState(tabMonitorCustom);
  const resetRecoilTabMonitorProcessi = useResetRecoilState(tabMonitorProcessi);

  const resetRecoilConfigTaskOdi = useResetRecoilState(
    atomsStrumentiConfigTaskOdi
  );
  const resetConfigTaskSoa = useResetRecoilState(atomsStrumentiConfigTaskSoa);
  const resetRecoilConfigTriggerOdi = useResetRecoilState(
    atomsStrumentiConfigTriggerOdi
  );
  const resetRecoilConfigurazione = useResetRecoilState(
    atomsStrumentiConfigurazione
  );
  const resetRecoilControlloPulizia = useResetRecoilState(
    atomsStrumentiControlloPulizia
  );
  const resetRecoilElencoCluster = useResetRecoilState(
    atomsStrumentiElencoCluster
  );
  const resetRecoilElencoCode = useResetRecoilState(atomsStrumentiElencoCode);
  const resetRecoilElencoControlloriAvvio = useResetRecoilState(
    atomsStrumentiElencoControlloriAvvio
  );
  const resetRecoilElencoIniettori = useResetRecoilState(
    atomsStrumentiElencoIniettori
  );
  const resetRecoilElencoJob = useResetRecoilState(atomsStrumentiElencoJob);
  const resetRecoilElencoMail = useResetRecoilState(atomsStrumentiElencoMail);
  const resetRecoilElencoParser = useResetRecoilState(
    atomsStrumentiElencoParser
  );
  const resetRecoilElencoPlgin = useResetRecoilState(
    atomsStrumentiElencoPlugin
  );
  const resetRecoilElencoReport = useResetRecoilState(
    atomsStrumentiElencoReport
  );
  const resetRecoilElencoSequence = useResetRecoilState(
    atomsStrumentiElencoSequence
  );
  const resetRecoilElencoTag = useResetRecoilState(atomsStrumentiElencoTag);
  const resetRecoilElencoTranscoder = useResetRecoilState(
    atomsStrumentiElencoTranscoder
  );
  const resetRecoilElencoUtenti = useResetRecoilState(
    atomsStrumentiElencoUtenti
  );
  const resetRecoilElencoValidatori = useResetRecoilState(
    atomsStrumentiElencoValidatori
  );
  const resetRecoilGestioneCallback = useResetRecoilState(
    atomsStrumentiGestioneCallBack
  );
  const resetRecoilRegistroEventi = useResetRecoilState(
    atomsStrumentiRegistroEventi
  );
  const resetRecoilSoaPropriertiesDeSerializer = useResetRecoilState(
    atomsStrumentiSoaPropriertiesDeSerializer
  );

  resetFiltersMasterSwitch();
  resetFiltersElencoIstanzeProcesso();
  resetFiltersElencoTranscodifiche();
  resetFiltersRicerca();
  resetConditionsRicerca();
  resetTabDettagliProcesso();
  resetComponent();
  resetRecoilTabMonitorSistema();
  resetRecoilTabMonitorCustom();
  resetRecoilTabMonitorProcessi();

  resetRecoilConfigTaskOdi();
  resetConfigTaskSoa();
  resetRecoilConfigTriggerOdi();
  resetRecoilConfigurazione();
  resetRecoilControlloPulizia();
  resetRecoilElencoCluster();
  resetRecoilElencoCode();
  resetRecoilElencoControlloriAvvio();
  resetRecoilElencoIniettori();
  resetRecoilElencoJob();
  resetRecoilElencoMail();
  resetRecoilElencoParser();
  resetRecoilElencoPlgin();
  resetRecoilElencoReport();
  resetRecoilElencoSequence();
  resetRecoilElencoTag();
  resetRecoilElencoTranscoder();
  resetRecoilElencoUtenti();
  resetRecoilElencoValidatori();
  resetRecoilGestioneCallback();
  resetRecoilRegistroEventi();
  resetRecoilSoaPropriertiesDeSerializer();
};
