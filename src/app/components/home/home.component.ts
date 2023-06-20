import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HotToastService, Toast } from "@ngneat/hot-toast";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("sidenav") sidenav: any;
  user$ = this.authenticationService.currentUser$;
  isExpanded = true;
  showSubmenu: boolean = false;
  math: boolean = true;
  azerb: boolean = false;
  english: boolean = false;
  isShowing = false;
  naturalEdedler = false;
  showSubSubMenu: boolean = false;
  showSubSubMenu2: boolean = false;
  showSubSubMenu3: boolean = false;
  showSubSubMenu4: boolean = false;
  showSubSubMenu5: boolean = false;
  showSubSubMenu6: boolean = false;
  showSubSubMenu7: boolean = false;
  showSubSubMenu8: boolean = false;
  showSubSubMenu9: boolean = false;
  showSubSubMenu10: boolean = false;
  showSubSubMenu11: boolean = false;
  showSubSubMenu12: boolean = false;
  showSubSubMenu13: boolean = false;
  showSubSubMenu14: boolean = false;
  showSubSubMenu15: boolean = false;
  showSubSubMenu16: boolean = false;
  showSubSubMenu17: boolean = false;
  showSubSubMenu18: boolean = false;
  showSubSubMenu19: boolean = false;
  showSubSubMenu20: boolean = false;
  showSubSubMenu21: boolean = false;
  showSubSubMenu22: boolean = false;
  showSubSubMenu23: boolean = false;
  showSubSubMenu24: boolean = false;
  showSubSubMenu25: boolean = false;
  showSubSubMenu26: boolean = false;

  colorMath: string = '#E4005C';
  colorAz: string = '#FFFFFF';
  colorEn: string = '#FFFFFF';

  naturalEdedlerArr: string[] = ['Onluq say sistemində yazılış', 'Toplanma, çıxılma, vurulma və bölünmə', 'Bölünmə əlamətləri', 'Qalıqlı bölmə', 'Sadə vuruqlara ayrılış', 'Ən böyük ortaq bölən (ƏBOB)', 'Ən kiçik ortaq bölən (ƏKOB)' ]
  kesrlerArr: string[] = ['Toplanma, çıxılma, vurulma və bölünmə', 'Düzgün və düzgün olmayan kəsrlər', 'Sonsuz dövrü onluq kəsrlər', 'Adi kəsrin onluq kəsrə çevrilməsi', 'Onluq kəsrin adi kəsrə çevrilməsi', 'Kəsrlərin müqayisəsi'] 
  nisbetArr: string[] = ['Nisbət. Tənasüb', 'Tənasübün xassələri', 'Düz və tərs mütənasiblik', 'Faiz. Ədədin faizinin tapılması', 'Faizinə görə ədədin tapılması','İki ədədin faiz nisbəti', 'Faizə aid məsələlər' ]
  ededlerArr: string[] = ['Rasional ədədlər. Rasional ədədlər üzərində əməllər', 'İrrasional ədədlər', 'Ədədin modulu. Modul daxil olan ifadələrin çevrilməsi', 'Ədədi orta', 'Ədədi orta', 'Həqiqi ədədlərin müqayisəsi', 'Ədədin tam və kəsr hissəsi', 'Ədədin standart şəkli']
  cebriArr: string[] = ['Birhədli və onun standart şəkli', 'Natural üstlü qüvvət', 'Natural üstlü qüvvət', 'Çoxhədlilər və onlar üzərində əməllər', 'Müxtəsər vurma düsturları', 'İfadələrin ədədi qiymətlərinin hesablanması', 'İfadələrin ən kiçik və ən böyük qiymətlərinin tapılması']
  vuruqArr: string[] = ['Müxtəsər vurma düsturlarının köməyi ilə vuruqlara ayırma', 'Müxtəlif üsulların köməyi ilə vuruqlara ayırma', 'Vuruqlara ayırma üsulu ilə ifadələrin ədədi qiymətlərinin hesablanması']
  rasionalArr: string[] = ['Kəsrlərin ixtisarı', 'DMQ çoxluğu', 'İfadələrin sadələşdirilməsi', 'İfadələrin ədədi qiymətlərinin tapılması']
  koklerArr: string[] = ['Hesabi kvadrat kök və onun xassələri', 'N-ci dərəcədən kök', 'Həqiqiüstlü qüvvət və onun xassələri. Ədədlərin müqayisəsi', 'Kəsrlərin ixtisarı. İfadələrin sadələşdirilməsi və ədədi qiymətinin tapılması']
  birmechulluArr: string[] = ['Xətti tənliklər', 'Kvadrat tənliklər və onların həllinin araşdırılması', 'Viyet teoremi və onun tərsi olan teorem', 'Rasional tənliklər', 'Modul işarəsi daxilində dəyişəni olan tənliklər', 'İrrasional tənliklər', 'Tənlik qurmaqla məsələlər həlli']
  sistemArr: string[] = ['Xətti tənliklər sistemi', 'Xətti tənliklər sisteminin həllinin araşdırılması', 'Biri birdərəcəli, digəri iki və daha yüksək dərəcəli olan tənliklər sistemi', 'Hər iki tənliyi iki və daha yüksək dərəcəli olan tənliklər sistemi', 'Tənliklər sistemi ilə məsələlər həlli']
  berabersizliklerArr: string[] = ['Ədədi bərabərsizliklər və onların əsas xassələri', 'Birdəyişənli xətti bərabərsizliklər', 'Birdəyişənli xətti bərabərsizliklər sistemi', 'İkidərəcəli və yüksək dərəcəli bərabərsizliklər', 'Rasional bərabərsizliklər', 'Modul işarəsi daxilində dəyişəni olan bərabərsizliklər', 'Kvadrat bərabərsizliklər sistemi', 'İrrasional bərabərsizliklər']
  ardicilliqlarArr: string[] = ['Ədədi ardıcıllıqlar', 'Ədədi silsilələr', 'Həndəsi silsilələr. Sonsuz həndəsi silsilənin cəmi', 'Ədədi və həndəsi silsilələrə aid məsələlər']
  coxluqlarArr: string[] = ['Çoxluqlar', 'Çoxluqların birləşməsi, kəsişməsi, fərqi', 'Çoxluqların birləşməsi, kəsişməsi və fərqinin elementlərinin sayı']
  hendesArr: string[] = ['Düz xətt, şüa, parça. Parçaların ölçülməsi', 'Bucaq. Bucaqların ölçülməsi. Bucağın tənböləni', 'Qonşu və qarşılıqlı bucaqlar', 'İki paralel düz xəttin üçüncü ilə kəsişməsindən alınan bucaqlar', 'Uyğun tərəfləri paralel və perpendikulyar olan bucaqlar']
  ucbucaqlarArr: string[] = ['Üçbucaq. Üçbucaq bərabərsizliyi', 'Üçbucağın perimetri', 'Üçbucağın medianı, tənböləni, hündürlüyü', 'Medianların və tənbölənlərin xassəsi', 'Üçbucağın daxili bucaqlarının cəmi. Üçbucağın xarici bucağının xassəsi', 'Üçbucaqların konqruyentlik əlaməti. Fales teoremi. Üçbucağın orta xətti', 'Bərabəryanlı üçbucaqlar', 'Bərabərtərəfli üçbucaqlar', 'Düzbucaqlı üçbucaq. Pifaqor teoremi', 'Düzbucaqlı üçbucağın tərəfləri və bucaqları arasındakı münasibətlər', 'Sinuslar teoremi', 'Kosinuslar teoremi']
  dordbucaqlarArr: string[] =['Qabarıq çoxbucaqlı. Qabaqrıq çoxbucaqlının daxili və xarici bucaqlarının cəmi. Düzgün çoxbucaqlı', 'Paraleloqram, onun xassələri və əlamətləri', 'Düzbucaqlı, kvadrat, romb və onların xassələri', 'Trapesiya və onun orta xətti']
  cevreArr: string[] = ['Çevrə. Dairə. Radius, diametr, vətər', 'Çevrənin və çevrə qövsünün uzunluğu', 'Çevrələrin qarşılıqlı vəziyyəti', 'Mərkəzi bucaq. Daxilə çəkilmiş bucaq. Toxunanla vətər arasındakı bucaq', 'Çevrədə mütənasib parçalar. Toxunan və kəsənin xassələri', 'Çevrənin daxilinə və xaricinə çəkilmiş üçbucaqlar', 'Çevrənin daxilinə və xaricinə çəkilmiş çoxbucaqlılar']
  funksiyalarArr: string[] = ['y= kx+ b funksiyası, qrafiki və qrafik çevrilmələri', 'y= k/x funksiyası, qrafiki və qrafik çevrilmələri', 'y=x^2, y=x^n (n>2) funksiyaları, onların qrafikləri və qrafiklərinin çevrilmələri', 'y=IxI funksiyası, qrafiki və qrafik çevrilmələri', 'y=sqrtx funksiyası, qrafiki və qrafik çevrilmələri', 'Tək və cüt funksiyalar', 'Artan və azalan funksiyalar', 'Dövri funksiya','Mürəkkəb funksiyalar', 'Tərs funksiya', 'Bəzi funksiyaların təyin oblastı və qiymətlər çoxluğu', 'Funksiyaların qrafiklərinin qarşılıqlı vəziyyəti']
  triqonometrikArr: string[] = ['Bucağın radian və dərəcə ölçüsü', 'İstənilən bucağın triqonometrik funksiyaları', 'Əsas triqonometrik eyniliklər', 'y= sinx funksiyası və xassələri', 'y= cosx funksiyası və xassələri', 'y= tgx funksiyası və xassələri', 'y=ctgx funksiyası və xassələri', 'Çevirmə düsturları', 'Triqonometrik funksiyaların ən böyük və ən kiçik qiymətləri', 'Tərs triqonometrik funksiyalar']
  triqonometriktoplamaArr: string[] = ['İki bucağın cəmi və fərqinin triqonometrik funksiyaları', 'İkiqat və yarım arqumentin triqonometrik funksiyaları', 'Triqonometrik funksiyaların cəminin və fərqinin hasilə çevrilməsi', 'Hasili cəmə çevirmə düsturları']
  triqonometriktenliklerArr: string[] = ['Sadə triqonometrik tənliklər', 'Triqonometrik tənliklərin müxtəlif üsullarla həlli', 'Triqonometrik tənliklər sistemi', 'Triqonometrik bərabərsizliklər']
  loqarifmikArr: string[] = ['Üstlü funksiya və onun xassələri', 'Ədədin loqarifmi', 'Loqarifmin xassələri', 'Loqarifmik funksiya və onun xassələri']
  loqarifmiktenliklerArr: string[] = ['Üstlü tənliklər', 'Loqarifmik tənliklər', 'Üstlü bərabərsizliklər', 'Loqarifmik bərabərsizliklər', 'Üstlü tənliklər sistemi', 'Loqarifmik tənliklər sistemi']
  limitArr: string[] = ['Ardıcıllığın limiti', 'Funksiyanın limiti']
  toremeArr: string[] = ['Funksiyaların törəməsi', 'Törəmənin həndəsi mənası', 'Toxunanın tənliyi', 'Funksiyanın böhran nöqtəsi', 'Funksiyanın artma azalma aralıqları, ekstremum nöqtələri, ən böyük və ən kiçik qiymətləri', 'Törəmənin tətbiqi ilə məsələ həlli']
  statistikaArr: string[] = ['Birləşmələr nəzəriyyəsi', 'Ehtimal nəzəriyyəsi və statistika']

  fonetikaArr: string[] = ['Saitlər, növləri və tələffüzü', 'Samitlər, növləri və tələffüzü', 'Ahəng qanunu', 'Heca və vurğu', 'Sözün fonetik xüsusiyyətləri']
  leksikaArr: string[] = ['Sözün leksik və qrammatik mənası', 'Sözün həqiqi və məcazi mənası. Təkmənalı və çoxmənalı sözlər. Terminlər. Arxaizmlər', 'Omonimlər. Sinonimlər. Antonimlər', 'Frazeoloji birləşmələr']
  sozArr: string[] = ['Sözün tərkibi: kök və şəkilçi', 'Şəkilçilərin növləri', 'Sözün başlanğıc forması', 'Eyniköklü sözlər', 'Sözün quruluşca növləri']
  isimArr: string[] = ['Konkret və mücərrəd isimlər. Tək və cəm isimlər. Ümumi və xüsusi isimlər', 'İsmin quruluşca növləri', 'İsmin mənsubiyyətə görə dəyişməsi', 'İsmin hallanması', 'İsimlərin yazılışı və tələffüzü', 'İsmin morfoloji xüsusiyyətləri. İsmin cümlədə rolu']
  sifetArr: string[] = ['Sifətin quruluşca növləri', 'Sifətin müqayisə dərəcələri', 'Sifətin isim kimi işlənə bilməsi. Sifətlərin yazılışı', 'ifətin morfoloji xüsusiyyətləri. Sifətin cümlədə rolu']
  sayArr: string[] = ['Sayların quruluşca növləri. Sayların mənaca növləri', 'Sayın morfoloji xüsusiyyətləri. Sayların isim kimi işlənə bilməsi. Sayların yazılışı']
  evezlikArr: string[] = ['Əvəzliyin quruluşca növləri. Əvəzliyin mənaca növləri', 'O, bu əvəzliklərindən sonra vergülün qoyulması', 'Əvəzliyin cümlədə rolu', '•	Əvəzliyin cümlədə rolu']
  feilArr: string[] = ['Feilin quruluşca növləri', 'Feilin qrammatik məna növləri', 'Feilin şəkilləri. Feilin zamanları. Təsdiq və inkar feillər', 'İdi, imiş, isə hissəcikləri və yazılışı', 'Feilin morfoloji xüsusiyyətləri']
  feilformaArr: string[] = ['Məsdər', 'Feili sifət', 'Feili bağlama']
  zerfArr: string[] = ['Zərfin quruluşca növləri', 'Zərfin mənaca növləri', 'Zərflərin  yazılışı', 'Zərfin cümlədə rolu. Zərfin morfoloji xüsusiyyətləri']
  komekciArr:string[] = ['Qoşma', 'Bağlayıcı', 'Ədat', 'Modal sözlər', 'Nida', 'Köməkçi nitq hissələrinin omonimliyi və sinonimliyi']
  sozbirleshmeArr: string[] = ['Söz birləşmələri və quruluşuna görə növləri', 'İsmi birləşmələr', 'Mürəkkəb adlar və onların yazılışı', 'Feili birləşmələr', 'Sözlər arasında sintaktik əlaqənin növləri. Tabesizlik və tabelilik əlaqəsi']
  cumleArr: string[] = ['Məqsəd və intonasiyaya görə cümlənin növləri', 'Müəyyən şəxsli cümlələr', 'Qeyri-müəyyən şəxsli cümlələr', 'Ümumi şəxsli cümlələr', 'Şəxssiz cümlələr', 'Adlıq cümlələr. Söz-cümlələr', 'Baş üzvlərin iştirakına görə sadə cümlələrin növləri ']
  cumleuzvleriArr: string[] = ['Mübtəda və onun ifadə vasitələri', 'Xəbər və onun ifadə vasitələri', 'Cümlənin ikinci dərəcəli üzvləri', 'Tamamlıq və onun ifadə vasitələri', 'Təyin və onun ifadə vasitələri', 'Zərflik, məna növləri və onun ifadə vasitələri', 'Baş və ikinci dərəcəli cümlə üzvləri', 'Cümlədə sözlərin sıraları. İnversiya']
  hemcinsArr: string[] = ['Həmcins üzvlər', 'Həmcins üzvlərdə ümumiləşdirici söz', 'Həmcins üzvlərdə şəkilçi və köməkçi vasitələrin ixtisarı']
  xitabArr: string[] = ['Xitab', 'Ara sözlər']
  murekkebArr: string[] = ['Tabesiz mürəkkəb cümlə', 'Tabeli mürəkkəb cümlə. Tabeli mürəkkəb cümlənin tərəflərini bağlayan vasitələr', 'Tabeli mürəkkəb cümlədə baş və budaq cümlə', 'Mürəkkəb cümlə']
  dilArr: string[] = ['Yazı və onun növləri', 'Dil. Nitq mədəniyyəti']

  nounArr: string[] = ['Morphological Composition of Nouns', 'Morphological and Semantic Characteristics of Nouns', 'Cases of Nouns ']
  articlesArr: string[] = ['A/An', 'The']
  pronounsArr: string[] = ['Personal Pronouns. Possessive Pronouns. Reflexive Pronouns. Demonstrative Pronouns', 'Negative Pronouns. Indefinite Pronouns. Defining Pronouns']
  tenseArr: string[] = ['Simple Tense Forms', 'Continuous Tense Forms', 'Perfect Tense Forms', '•	Perfect Continuous Tense Forms']
  passiveArr: string[] = ['Changing Declarative Sentences into Passive', 'Changing Interrogative Sentences into Passive', 'Choosing Sentences in Passive ']
  prepositionArr: string[] = ['Verbs and Non-Finite Forms of the Verbs', 'Complex Objects. Regular and Irregular Verbs', 'Gerunds, Participles( I, II), Passive Causatives ']
  interrogativeArr: string[] = ['Question Words', 'Disjunctive questions', 'Questions given to the secondary parts of sentences. Questions given to the subject and its attributes', 'Questions with “have” as a notional verb or a modal equivalent']


  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private toast : HotToastService
  ) {}

  ngOnInit(): void {}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  clickMath() {
    this.math = true;
    this.azerb = false;
    this.english = false;
    this.colorMath = '#E4005C';
    this.colorAz = '#FFFFFF';
    this.colorEn = '#FFFFFF';
  }

  clickAzerb() {
    this.math = false;
    this.azerb = true;
    this.english = false;
    this.colorAz= '#E4005C';
    this.colorMath = '#FFFFFF';
    this.colorEn = '#FFFFFF';
  }

  clickEnglish() {
    this.math = false;
    this.azerb = false;
    this.english = true;
    this.colorEn = '#E4005C';
    this.colorAz = '#FFFFFF';
    this.colorMath = '#FFFFFF';
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout() {
    this.authenticationService.logout().subscribe(() => {
      this.authenticationService.currentUser$;
      this.router.navigate(["/"]);
    });
  }

  beta() {
    this.toast.error('Hal-hazırda Siz saytın beta versiyasındandan istifadə edirsiniz');
  }
}
