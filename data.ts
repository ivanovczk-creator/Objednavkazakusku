import { Product, LocationInfo } from './types';

// ZDE UPRAVUJTE CENY A VIDITELNOST PRODUKTŮ
// visible: true = produkt je vidět
// visible: false = produkt je skrytý
// price: cena v Kč
export const products: Product[] = [
  { name: "LIKÉROVÁ ŠPIČKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000208-c8a13c8a14/01.jpeg?ph=cd4d5a01c0" },
  { name: "NUGÁTOVÝ DORTÍK", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000211-be7ddbe7df/03.jpeg?ph=cd4d5a01c0" },
  { name: "PANNA COTTA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000302-b0ee0b0ee3/04.jpeg?ph=cd4d5a01c0" },
  { name: "METRO", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000214-7eabe7eac0/05.jpeg?ph=cd4d5a01c0" },
  { name: "DORTIČKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000304-9bb7d9bb7f/06.jpeg?ph=cd4d5a01c0" },
  { name: "KAKAOVÁ KOSTKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000216-5b4555b458/07.jpeg?ph=cd4d5a01c0" },
  { name: "INDIÁN", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000218-b73a7b73aa/08.jpeg?ph=cd4d5a01c0" },
  { name: "VĚTRNÍK PISTÁCIOVÝ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000306-cf743cf744/09.jpeg?ph=cd4d5a01c0" },
  { name: "PISTÁCIOVÁ KOULE", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000220-b69a3b69a5/10.jpeg?ph=cd4d5a01c0" },
  { name: "TARTALETKA VIŠŇOVÁ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000222-a96f8a96fb/11.jpeg?ph=cd4d5a01c0" },
  { name: "TARTALETKA ČOKOLÁDOVÁ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000308-0c70b0c70c/12.jpeg?ph=cd4d5a01c0" },
  { name: "CRAQUELIN", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000310-7ef3f7ef41/14.jpeg?ph=cd4d5a01c0" },
  { name: "TIRAMISU", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000226-7803f78042/15.jpeg?ph=cd4d5a01c0" },
  { name: "JADROVÝ ROHLÍK", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000312-9820398205/16.jpeg?ph=cd4d5a01c0" },
  { name: "RAFFAELLO", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000228-bf2d2bf2d4/18.jpeg?ph=cd4d5a01c0" },
  { name: "VIŠŇOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000316-2c2a02c2a3/20.jpeg?ph=cd4d5a01c0" },
  { name: "JAHODOVÝ S JOGURTEM", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000318-cf381cf383/21.jpeg?ph=cd4d5a01c0" },
  { name: "MALINOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000320-17bc717bc9/22.jpeg?ph=cd4d5a01c0" },
  { name: "MANDARINKOVÉ ŽELÉ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000322-228f3228f5/23.jpeg?ph=cd4d5a01c0" },
  { name: "ČOKOMALINOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000207-4a3fd4a3ff/24.jpeg?ph=cd4d5a01c0" },
  { name: "JABLEČNÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000235-6789167893/26.jpeg?ph=cd4d5a01c0" },
  { name: "PUNČOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000236-cb134cb136/27.jpeg?ph=cd4d5a01c0" },
  { name: "KOKOSOVÁ LAHŮDKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000239-ab56aab56d/29.jpeg?ph=cd4d5a01c0" },
  { name: "MECHOVÝ DORT", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000206-ac45bac45d/30.jpeg?ph=cd4d5a01c0" },
  { name: "OVOCNÝ KOŠ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000324-821c8821c9/31.jpeg?ph=cd4d5a01c0" },
  { name: "OVOCNÁ MISKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000326-ed1e7ed1e8/32.jpeg?ph=cd4d5a01c0" },
  { name: "ŠODO SE ŠLEHAČKOU", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000244-86e8086e83/33.jpeg?ph=cd4d5a01c0" },
  { name: "OVOCNÝ MIX", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000245-d8367d8368/34.jpeg?ph=cd4d5a01c0" },
  { name: "PAŘÍŽSKÁ TRUBIČKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000246-5959259593/35.jpeg?ph=cd4d5a01c0" },
  { name: "MANDLOVÁ ROLÁDA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000247-f1a5af1a5d/36.jpeg?ph=cd4d5a01c0" },
  { name: "PAŘÍŽSKÁ BOMBA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000248-5c23c5c23e/37.jpeg?ph=cd4d5a01c0" },
  { name: "TOFFI", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000332-6e2df6e2e1/40.jpeg?ph=cd4d5a01c0" },
  { name: "PAŘÍŽSKÝ DORT", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000254-7f85e7f85f/41.jpeg?ph=cd4d5a01c0" },
  { name: "VĚNEČEK S FONDÁNEM", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000256-837388373b/42.jpeg?ph=cd4d5a01c0" },
  { name: "BRIKETKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000255-360de360e0/43.jpeg?ph=cd4d5a01c0" },
  { name: "LASKONKA", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000257-9673c9673e/44.jpeg?ph=cd4d5a01c0" },
  { name: "LINECKÉ TŘENÉ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000334-b47adb47af/45.jpeg?ph=cd4d5a01c0" },
  { name: "LINECKÉ S MARMELÁDOU", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000336-1ea411ea42/46.jpeg?ph=cd4d5a01c0" },
  { name: "LINECKÉ S MARCIPÁNEM", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000338-f41b0f41b2/47.jpeg?ph=cd4d5a01c0" },
  { name: "VĚNEČEK SE ŠLEHAČKOU", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000261-8528f85292/48.jpeg?ph=cd4d5a01c0" },
  { name: "KÁVOVÝ BANÁNEK", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000263-6eb6a6eb6b/50.jpeg?ph=cd4d5a01c0" },
  { name: "VIŠŇOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000265-0f6580f65b/51.jpeg?ph=cd4d5a01c0" },
  { name: "CITRÓNOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000340-222f4222f6/52.jpeg?ph=cd4d5a01c0" },
  { name: "LANÝŽOVÝ DORT", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000342-ef0c4ef0c7/53.jpeg?ph=cd4d5a01c0" },
  { name: "SOFIA ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000270-cfd91cfd92/54.jpeg?ph=cd4d5a01c0" },
  { name: "VĚTRNÍK KARAMELOVÝ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000271-4e0e94e0ec/55.jpeg?ph=cd4d5a01c0" },
  { name: "TARTALETKA SRDÍČKO", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000276-1534b1534c/58.jpeg?ph=cd4d5a01c0" },
  { name: "ROLÁDA DELUXE", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000344-9bd0c9bd0e/59.jpeg?ph=cd4d5a01c0" },
  { name: "POP - CAKE", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000280-7385773859/61.jpeg?ph=cd4d5a01c0" },
  { name: "VIŠŇOVÝ DORT", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000346-46d0746d08/62.jpeg?ph=cd4d5a01c0" },
  { name: "NANUK", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000283-c9da2c9da6/63.jpeg?ph=cd4d5a01c0" },
  { name: "KARAMELOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000285-8f3478f349/64.jpeg?ph=cd4d5a01c0" },
  { name: "GANÁŽOVÝ DORT", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000286-a4232a4235/65.jpeg?ph=cd4d5a01c0" },
  { name: "BORŮVKOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000289-dd755dd757/66.jpeg?ph=cd4d5a01c0" },
  { name: "TARTALETKA KARAMELOVÁ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000293-e9392e9395/68.jpeg?ph=cd4d5a01c0" },
  { name: "ČOKOLÁDOVÝ DORTÍK", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000297-4e6864e689/70.jpeg?ph=cd4d5a01c0" },
  { name: "KÁVOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000299-93d6293d64/71.jpeg?ph=cd4d5a01c0" },
  { name: "HRUŠKOVÝ ŘEZ", price: 0, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000348-a111ca111d/72.jpeg?ph=cd4d5a01c0" }
];

export const locations: LocationInfo[] = [
  {
    id: "petrvald",
    name: "Cukrárna Petřvald",
    address: "Šenovská 1, Petřvald",
    phone: "778 157 857",
    hours: ["Út - Ne: 9:00 - 17:00"]
  },
  {
    id: "karvina",
    name: "Cukrárna Karviná",
    address: "Tř. Těreškovové 2233/28, Karviná",
    phone: "778 157 867",
    hours: ["Po - Pá: 9:00 - 17:00", "So: 9:00 - 12:00"]
  },
  {
    id: "ostrava",
    name: "Cukrárna Ostrava - Zábřeh (Kotva)",
    address: "Výškovická 116A, Ostrava Zábřeh",
    phone: "775 271 101",
    hours: ["Po - Pá: 9:00 - 17:00", "So: 9:00 - 12:00"]
  },
  {
    id: "pist",
    name: "Výrobna Píšť",
    address: "Opavská 218/101, Píšť",
    phone: "602 323 788",
    hours: ["Po - Pá: 6:00 - 15:00"]
  }
];