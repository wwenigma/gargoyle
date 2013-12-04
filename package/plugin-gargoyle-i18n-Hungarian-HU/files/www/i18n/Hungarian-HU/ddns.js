/*
 *  UTF-8 (with BOM) Hungarian-HU text strings for ddns.sh html elements
 */

DyDNS.DYSect="Dinamikus DNS szolgáltatás";
DyDNS.AddDy="Új DDNS szolgáltatás hozzáadása";
DyDNS.SvPro="Szolgáltató";
DyDNS.ChItv="Ellenőrzés intervalluma";
DyDNS.FUItv="Kényszerített frissítés";
DyDNS.AddDDNS="DDNS szolgáltatás hozzáadása";
DyDNS.HelpCI="Az <em>ellenőrzés intervalluma</em> adja meg, hogy a router milyen gyakran ellenőrizze, szükséges-e a megadott domain névhez tartozó IP frissítése. Ez a DDNS szolgáltatóhoz való kapcsolódás nélkül történik, tehát nem okoz problémát azoknál a szolgáltatóknál sem akik tiltják a túl sűrű kapcsolódást (pl. dyndns.com). Ugyanakkor az ellenőrzéshez kapcsolat felépítése szükséges így ez az érték ne legyen túl alacsony. Az elfogadható érték 10-20 perc minimum.";
DyDNS.HelpFI="A <em>kényszerített frissítés</em> adja meg, milyen gyakran csatlakozzon a router a DDNS szolgáltatóhoz és frissítse a bejegyzéseket még ha nem is változott az IP cím. A szolgáltatók tiltják a túl gyakran frissítő felhasználókat, de esetleg zárolják a felhasználói fiókokat ha nem frissítenek egy hónapig. Ajánlott ezt az értéket 3-7 nap között beállítani.";
DyDNS.UpErr1="Update of new dynamic DNS service configuration(s) failed";
DyDNS.UpErr2="Service(s) could not be updated properly and have therefore been removed.";
DyDNS.cNams=["Domain", "Last Update", "Enabled", "", "" ];
DyDNS.InvErr="ERROR: specified provider is invalid";
DyDNS.DupErr="Duplicate update specified.";
DyDNS.ForceU="Kényszerített frissítés";
DyDNS.ModErr="This service has been added/modified and therefore you must save your changes before an update can be performed. Click \""+UI.SaveChanges+"\" and try again.";
DyDNS.UpFErr="Frissítés sikertelen.  Ellenőrizd a beállításokat és az internetkapcsolatod.";
DyDNS.UpOK="Frissítés sikeres.";
DyDNS.UpSrvErr="Could not update service class.";

//ddns_edit.sh
DyDNS.EDSect="DDNS szolgáltatás szerkesztése";

// /etc/ddns_providers.conf
DyDNS.DoNm="Domain név";
DyDNS.UsrN="Felh. név";
DyDNS.Pssw="Jelszó";
DyDNS.Eml="E-mail";
DyDNS.Key="Kulcs";
DyDNS.AKey="API Kulcs";
DyDNS.Tokn="Token";
