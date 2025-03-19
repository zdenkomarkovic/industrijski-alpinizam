import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";
import { MdOutlineSavings } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { VscSurroundWith } from "react-icons/vsc";
import { GiMountainClimbing } from "react-icons/gi";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Industrijski alpinizam",
    link: "/industrijskialpinizam",
  },
  {
    title: "Krovopokrivački radovi",
    link: "/krovopokrivanje",
  },
  {
    title: "Limarski radovi",
    link: "/limarskiradovi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Srbija i inostranstvo",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data1: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title:
      "- Postavljanje dekoracija i elektroinstalacija na zgrade, crkve i zvonike…",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title:
      "- Fasaderski radovi, postavljanje termoizolacione fasade, popravka, bojenje…",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "- Montaža i demontaža reklama, natpisa…",
    text: "",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "- Postavljanje i održavanje gromobrana i oluka.",
    text: "",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "- Radovi na zvonicima tornjevima i antenskim stubovima.",
    text: "",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "- Montaža i postavljanje svih vrsta skela na nedostupnim mjestima.",
    text: "",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "- Postavljanje klima i drugih uređaja na nedostupnim mjestima",
    text: "",
  },
];

export const cards2Data2: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "- Postavljanje zaštita od ptica.",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "- Krovopokrivački i limarski radovi.",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "- Čišćenje snega i ledenica sa krova.",
    text: "",
  },
  {
    id: 4,
    icon: GiWeight,
    title:
      "- Podizanje kabastog tereta na visine i do 200 metara sistemom koturača.",
    text: "",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "- Orezivanje grana, krošanja i drveća",
    text: "",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "- Pranje fasada, prozora, skidanje grafita…",
    text: "",
  },
];
export const cards2Data3: Cards2Data[] = [
  {
    id: 1,
    icon: GiMountainClimbing,
    title: "Veća fleksibilnost",
    text: "Rad na teško dostupnim mestima bez obzira na visinu ili teren.",
  },
  {
    id: 2,
    icon: LuTimerReset,
    title: "Brža realizacija",
    text: "Nema potrebe za dugotrajnom montažom skela, što smanjuje vreme izvođenja radova.",
  },
  {
    id: 3,
    icon: MdOutlineSavings,
    title: "Niži troškovi",
    text: "Izbegavaju se visoki troškovi postavljanja i uklanjanja skele, što čini ovu metodu isplativijom.",
  },
  {
    id: 4,
    icon: AiOutlineSafetyCertificate,
    title: "Maksimalna sigurnost",
    text: "Naši radnici su konstantno osigurani užetom, što eliminiše rizik od pada.",
  },
  {
    id: 5,
    icon: VscSurroundWith,
    title: "Minimalni uticaj na okruženje",
    text: "Radovi se obavljaju bez narušavanja poslovnih i stambenih prostora.",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Industrijski alpinizam je sve češće korišćena tehnika u građevinarstvu, jer omogućava brz, siguran i ekonomičan način izvođenja radova na visini. Za razliku od tradicionalnih metoda koje podrazumevaju skupe skele i dizalice, pristup užetom pruža brojne prednosti.",
};

export interface Reference {
  title: string;
  link: string;
}

export const reference: Reference[] = [
  {
    title: "In Hotel Beograd",
    link: "/in.jpg",
  },
  {
    title: "Bali Paradizo hotel",
    link: "/bali.jpg",
  },
  {
    title: "Central Park Hotel",
    link: "/central.svg",
  },

  {
    title: "NIS Petrol",
    link: "/nis.svg",
  },

  {
    title: "Delhaize Srbija",
    link: "/deleze.svg",
  },
  {
    title: "Građevinska direkcija Srbije ",
    link: "/gds.png",
  },
  {
    title: "Građevinska direkcija Prijepolje",
    link: "/gds.png",
  },
  {
    title: "Građevinska direkcija Novi Sad,",
    link: "/gds.png",
  },
  {
    title: "Građevinska direkcija Beograd",
    link: "/gds.png",
  },
  {
    title: "Građevinska direkcija Valjevo",
    link: "/gds.png",
  },
  {
    title: "TownHouse 27 Hotel",
    link: "/town.png",
  },
  {
    title: "Francuski kulturni centar",
    link: "/francuski.png",
  },
  {
    title: "Bolnica Nova Vita",
    link: "/novavita.gif",
  },
  {
    title: "Fiat Automobili Srbija",
    link: "/fiat.png",
  },
  {
    title: "Institut za molekularnu genetiku i genetičko inženjerstvo",
    link: "/institut.webp",
  },
  {
    title: "Fakultet sporta i fizičkog vaspitanja „Dif“",
    link: "",
  },
  {
    title: "TE- KO Kostolac d.o.o. Kostolac",
    link: "",
  },
  {
    title: "Skupština stanara…",
    link: "",
  },
  {
    title: "Motel Stari Hrast",
    link: "",
  },
  {
    title: "Radisson Blu Old Mill Hotel",
    link: "",
  },
  {
    title: "Holcim Srbija d.o.o.",
    link: "",
  },
  {
    title: "Roda Megamarketi",
    link: "",
  },
  {
    title: "Klinički centar Srbije",
    link: "",
  },
  {
    title: "Sportsko Poslovni Centar Odžaci",
    link: "",
  },
  {
    title: "BEOKRAN DOO",
    link: "",
  },
];

export interface Krovopokrivac {
  title: string;
  text: string;
}

export const krovopokrivacke: Krovopokrivac[] = [
  {
    title: "Sve oblike krovova",
    text: " – klasični, moderni, krovovi sa više nivoa i specijalni dizajni.",
  },
  {
    title: " Sve vrste pokrivnih materijala",
    text: " – crep, lim, tegola, bitumenski i metalni pokrivači.",
  },
  {
    title: "Sanacija curenja",
    text: " – brzo i efikasno rešavanje problema prokišnjavanja i oštećenja.",
  },
  {
    title: "Izrada nadstrešnica",
    text: " – zaštita ulaza, terasa, automobila i dvorišnih prostora.",
  },
  {
    title: "Izrada badža",
    text: " – funkcionalni i estetski dodaci na krovu koji poboljšavaju ventilaciju i osvetljenje.",
  },
  {
    title: "Izrada letnjikovaca",
    text: " – konstrukcije prilagođene vašem dvorištu za uživanje u hladu.",
  },
];
export const limarija: Krovopokrivac[] = [
  {
    title: "Proizvodnja građevinske limarije",
    text: " – izrada svih limenih elemenata u našoj radionici, po meri i od svih vrsta materijala.",
  },
  {
    title: "Ugradnja na terenu",
    text: " – precizna i kvalitetna montaža limenih delova na krovu i fasadi.",
  },
  {
    title: "Sve vrste sanacija curenja",
    text: " – otklanjanje problema sa prokišnjavanjem, zamena oštećenih limova i poboljšanje hidroizolacije.",
  },
];

export const limSlike: string[] = [
  "/lim.jpg",
  "/lim.webp",
  "/lim2.jpg",
  "/lim3.webp",
  "/alpinizam (10).jpg",
  "/alpinizam (20).jpg",
  "/alpinizam (41).jpg",
  "/alpinizam (25).jpg",
];
export const krovSlike: string[] = [
  "/krov3.jpg",
  "/krov2.jpg",
  "/krov.jpg",
  "/alpinizam.jpg",
  "/krov4.jpg",
  "/alpinizam (12).jpg",
  "/alpinizam (36).jpg",
];
export const alpinizamSlike: string[] = [
  "/alpinizam (2).jpg",
  "/alpinizam (3).jpg",
  "/alpinizam (4).jpg",
  "/alpinizam (6).jpg",
  "/alpinizam (7).jpg",
  "/alpinizam (8).jpg",
  "/alpinizam (9).jpg",
  "/alpinizam (13).jpg",
  "/alpinizam (14).jpg",
  "/alpinizam (15).jpg",
  "/alpinizam (16).jpg",
  "/alpinizam (17).jpg",
  "/alpinizam (19).jpg",
  "/alpinizam (21).jpg",
  "/alpinizam (22).jpg",
  "/alpinizam (24).jpg",
  "/alpinizam (26).jpg",
  "/alpinizam (27).jpg",
  "/alpinizam (28).jpg",
  "/alpinizam (29).jpg",
  "/alpinizam (30).jpg",
  "/alpinizam (31).jpg",
  "/alpinizam (32).jpg",
  "/alpinizam (33).jpg",
  "/alpinizam (34).jpg",
  "/alpinizam (35).jpg",
  "/alpinizam (37).jpg",
  "/alpinizam (38).jpg",
  "/alpinizam (39).jpg",
  "/alpinizam (40).jpg",
];
