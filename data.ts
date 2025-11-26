import { Product, LocationInfo } from './types';

// ==========================================
// NÁVOD NA ÚPRAVU:
// 1. Priorita (Řazení): Změňte číslo u 'priority'. 
//    - priority: 1 = zobrazí se jako PRVNÍ
//    - priority: 100 = zobrazí se na konci (výchozí)
//    - Chcete-li něco posunout dopředu, dejte mu malé číslo (2, 3, 4...).
// 2. Cena: Změňte číslo za 'price:'. Např. price: 45
// 3. Skrytí: Změňte 'visible: true' na 'visible: false'
// ==========================================

const PLACEHOLDER_IMG = "https://placehold.co/600x600/fdf2f8/9d174d?text=Foto+brzy+doplníme&font=roboto";

export const products: Product[] = [
  // --- TOP PRODUKTY (Prioritní) ---
  { name: "Karamelový větrník", priority: 1, price: 55, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000271-4e0e94e0ec/55.jpeg?ph=cd4d5a01c0" }, 
  { name: "Likérová špička", priority: 2, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000208-c8a13c8a14/01.jpeg?ph=cd4d5a01c0" },

  // --- OSTATNÍ (Výchozí priorita 100 - řazeno abecedně nebo dle seznamu) ---
  { name: "Indián", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000218-b73a7b73aa/08.jpeg?ph=cd4d5a01c0" },
  { name: "Jádrový rohlíček", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000312-9820398205/16.jpeg?ph=cd4d5a01c0" },
  { name: "Kakaová kostka", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000216-5b4555b458/07.jpeg?ph=cd4d5a01c0" },
  { name: "Čoko-malina řez", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000207-4a3fd4a3ff/24.jpeg?ph=cd4d5a01c0" }, 
  { name: "Pařížský dort se šlehačkou", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000254-7f85e7f85f/41.jpeg?ph=cd4d5a01c0" }, 
  { name: "Lanýžový dort", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000342-ef0c4ef0c7/53.jpeg?ph=cd4d5a01c0" },
  { name: "Pařížská bomba", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000248-5c23c5c23e/37.jpeg?ph=cd4d5a01c0" },
  { name: "Pařížská trubička", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000246-5959259593/35.jpeg?ph=cd4d5a01c0" },
  { name: "Punčový řez", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000236-cb134cb136/27.jpeg?ph=cd4d5a01c0" },
  { name: "Jablko s tvarohem a skořicí", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000235-6789167893/26.jpeg?ph=cd4d5a01c0" }, 
  { name: "Mandarinkový řez se zakysanou smetanou", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000322-228f3228f5/23.jpeg?ph=cd4d5a01c0" }, 
  { name: "Citrónový řez s ovocem", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000340-222f4222f6/52.jpeg?ph=cd4d5a01c0" }, 
  { name: "Jahodový řez s jogurtem", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000318-cf381cf383/21.jpeg?ph=cd4d5a01c0" },
  { name: "Višňový řez", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000316-2c2a02c2a3/20.jpeg?ph=cd4d5a01c0" },
  { name: "Malinový řez", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000320-17bc717bc9/22.jpeg?ph=cd4d5a01c0" },
  { name: "Toffi", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000332-6e2df6e2e1/40.jpeg?ph=cd4d5a01c0" },
  { name: "Roláda marcipánová", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000247-f1a5af1a5d/36.jpeg?ph=cd4d5a01c0" }, 
  { name: "Kokosová lahůdka", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000239-ab56aab56d/29.jpeg?ph=cd4d5a01c0" },
  { name: "Laskonka", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000257-9673c9673e/44.jpeg?ph=cd4d5a01c0" },
  { name: "Briketka", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000255-360de360e0/43.jpeg?ph=cd4d5a01c0" },
  { name: "Dortička", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000304-9bb7d9bb7f/06.jpeg?ph=cd4d5a01c0" },
  { name: "Pistáciové koule", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000220-b69a3b69a5/10.jpeg?ph=cd4d5a01c0" },
  { name: "Metro", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000214-7eabe7eac0/05.jpeg?ph=cd4d5a01c0" },
  { name: "Ovocný košíček", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000324-821c8821c9/31.jpeg?ph=cd4d5a01c0" }, 
  { name: "Ovocný mix", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000245-d8367d8368/34.jpeg?ph=cd4d5a01c0" },
  { name: "Ovocná miska", priority: 100, price: 55, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000326-ed1e7ed1e8/32.jpeg?ph=cd4d5a01c0" },
  { name: "Věneček s fondánem", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000256-837388373b/42.jpeg?ph=cd4d5a01c0" },
  { name: "Věneček se šlehačkou", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000261-8528f85292/48.jpeg?ph=cd4d5a01c0" },
  { name: "Banánek kávový se šlehačkou", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000263-6eb6a6eb6b/50.jpeg?ph=cd4d5a01c0" }, 
  { name: "Linecké kolečko s marmeládou", priority: 100, price: 35, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000336-1ea411ea42/46.jpeg?ph=cd4d5a01c0" }, 
  { name: "Linecké třené", priority: 100, price: 35, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000334-b47adb47af/45.jpeg?ph=cd4d5a01c0" },
  { name: "Linecké s marcipánem", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000338-f41b0f41b2/47.jpeg?ph=cd4d5a01c0" },
  { name: "Šodo se šlehačkou", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000244-86e8086e83/33.jpeg?ph=cd4d5a01c0" },
  { name: "Nugátový dortík", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000211-be7ddbe7df/03.jpeg?ph=cd4d5a01c0" },
  { name: "Dort rafaelo", priority: 100, price: 65, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000228-bf2d2bf2d4/18.jpeg?ph=cd4d5a01c0" }, 
  { name: "Panna cotta", priority: 100, price: 60, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000302-b0ee0b0ee3/04.jpeg?ph=cd4d5a01c0" },
  { name: "Karamelový řez mascarpone", priority: 100, price: 55, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000285-8f3478f349/64.jpeg?ph=cd4d5a01c0" }, 
  { name: "Craquelin", priority: 100, price: 65, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000310-7ef3f7ef41/14.jpeg?ph=cd4d5a01c0" },
  { name: "Čokoládový dortík", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000297-4e6864e689/70.jpeg?ph=cd4d5a01c0" },
  { name: "Tartaletka karamelová", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000293-e9392e9395/68.jpeg?ph=cd4d5a01c0" },
  { name: "Tartaletka srdíčko", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000276-1534b1534c/58.jpeg?ph=cd4d5a01c0" },
  { name: "Tartaletka čokoládová", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000308-0c70b0c70c/12.jpeg?ph=cd4d5a01c0" },
  { name: "Tartaletka višňová", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000222-a96f8a96fb/11.jpeg?ph=cd4d5a01c0" },
  { name: "Nanuk-Mimion", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000283-c9da2c9da6/63.jpeg?ph=cd4d5a01c0" }, 
  { name: "Borůvkový řez", priority: 100, price: 50, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000289-dd755dd757/66.jpeg?ph=cd4d5a01c0" },
  { name: "Mecháček s mascarpone", priority: 100, price: 65, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000206-ac45bac45d/30.jpeg?ph=cd4d5a01c0" }, 
  { name: "Pop-Cake", priority: 100, price: 40, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000280-7385773859/61.jpeg?ph=cd4d5a01c0" },
  { name: "Kávový řez", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000299-93d6293d64/71.jpeg?ph=cd4d5a01c0" },
  { name: "Větrník pistáciový", priority: 100, price: 55, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000306-cf743cf744/09.jpeg?ph=cd4d5a01c0" },
  { name: "Sophia řez", priority: 100, price: 45, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000270-cfd91cfd92/54.jpeg?ph=cd4d5a01c0" },
  { name: "Tiramisu", priority: 100, price: 60, visible: true, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000226-7803f78042/15.jpeg?ph=cd4d5a01c0" },

  // --- NOVÉ PRODUKTY (Nutno doplnit foto) ---
  { name: "Tvarohový řez", priority: 100, price: 45, visible: true, img: PLACEHOLDER_IMG },
  { name: "Mini zákusky", priority: 100, price: 30, visible: true, img: PLACEHOLDER_IMG },
  { name: "Roláda celá mini", priority: 100, price: 200, visible: true, img: PLACEHOLDER_IMG },
  { name: "Roláda celá", priority: 100, price: 390, visible: true, img: PLACEHOLDER_IMG },
  { name: "Dortička s nápisem", priority: 100, price: 50, visible: true, img: PLACEHOLDER_IMG },
  { name: "Linecké s mascarpone", priority: 100, price: 55, visible: true, img: PLACEHOLDER_IMG },
  { name: "Rybízová miska", priority: 100, price: 50, visible: true, img: PLACEHOLDER_IMG },
  { name: "Cupcake", priority: 100, price: 50, visible: true, img: PLACEHOLDER_IMG },
  { name: "Černý rybíz", priority: 100, price: 50, visible: true, img: PLACEHOLDER_IMG },
  { name: "Čoko višeň", priority: 100, price: 55, visible: true, img: PLACEHOLDER_IMG },
  { name: "Red Velvet", priority: 100, price: 65, visible: true, img: PLACEHOLDER_IMG },
  { name: "Dort Pavlova", priority: 100, price: 65, visible: true, img: PLACEHOLDER_IMG },
  { name: "Pistáciový dortík", priority: 100, price: 70, visible: true, img: PLACEHOLDER_IMG },
  { name: "Větrník malinový", priority: 100, price: 50, visible: true, img: PLACEHOLDER_IMG },
  { name: "Větrník slaný karamel", priority: 100, price: 40, visible: true, img: PLACEHOLDER_IMG },
  { name: "Sacher dort", priority: 100, price: 55, visible: true, img: PLACEHOLDER_IMG },
  { name: "Miska jahodová", priority: 100, price: 60, visible: true, img: PLACEHOLDER_IMG },
  { name: "Dubai", priority: 100, price: 95, visible: true, img: PLACEHOLDER_IMG },
  { name: "Špička v kelímku", priority: 100, price: 65, visible: true, img: PLACEHOLDER_IMG },
  { name: "Šodo čokoládové", priority: 100, price: 55, visible: true, img: PLACEHOLDER_IMG },
  { name: "Čoko desert", priority: 100, price: 50, visible: true, img: PLACEHOLDER_IMG },
  { name: "Brownies koule", priority: 100, price: 40, visible: true, img: PLACEHOLDER_IMG },
  { name: "Mango-čokoláda", priority: 100, price: 60, visible: true, img: PLACEHOLDER_IMG },
  { name: "Banánek mango", priority: 100, price: 65, visible: true, img: PLACEHOLDER_IMG },

  // --- SKRYTÉ (Nebyly v novém ceníku) ---
  { name: "Roláda Deluxe", priority: 100, price: 40, visible: false, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000344-9bd0c9bd0e/59.jpeg?ph=cd4d5a01c0" },
  { name: "Višňový dort", priority: 100, price: 45, visible: false, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000346-46d0746d08/62.jpeg?ph=cd4d5a01c0" },
  { name: "Ganážový dort", priority: 100, price: 45, visible: false, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000286-a4232a4235/65.jpeg?ph=cd4d5a01c0" },
  { name: "Hruškový řez", priority: 100, price: 35, visible: false, img: "https://cd4d5a01c0.clvaw-cdnwnd.com/58d5d0a9c721038cb5ac69a3cbfdeae6/200000348-a111ca111d/72.jpeg?ph=cd4d5a01c0" }
];

export const locations: LocationInfo[] = [
  {
    id: "petrvald",
    name: "Cukrárna Petřvald",
    address: "Šenovská 1, Petřvald",
    phone: "778 157 857",
    hours: ["Út - Ne: 9:00 - 17:00"],
    allowedDays: [0, 2, 3, 4, 5, 6] // Út-Ne
  },
  {
    id: "karvina",
    name: "Cukrárna Karviná",
    address: "Tř. Těreškovové 2233/28, Karviná",
    phone: "778 157 867",
    hours: ["Po - Pá: 9:00 - 17:00", "So: 9:00 - 12:00"],
    allowedDays: [1, 2, 3, 4, 5, 6] // Po-So
  },
  {
    id: "ostrava",
    name: "Cukrárna Ostrava - Zábřeh (Kotva)",
    address: "Výškovická 116A, Ostrava Zábřeh",
    phone: "775 271 101",
    hours: ["Po - Pá: 9:00 - 17:00", "So: 9:00 - 12:00"],
    allowedDays: [1, 2, 3, 4, 5, 6] // Po-So
  },
  {
    id: "pist",
    name: "Výrobna Píšť",
    address: "Opavská 218/101, Píšť",
    phone: "602 323 788",
    hours: ["Po - Pá: 6:00 - 15:00"],
    allowedDays: [1, 2, 3, 4, 5] // Po-Pá
  }
];