import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
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

  nounArr: string[] = ['Morphological Composition of Nouns', 'Morphological and Semantic Characteristics of Nouns', 'Cases of Nouns ']
  articlesArr: string[] = ['A/An', 'The']
  pronounsArr: string[] = ['Personal Pronouns. Possessive Pronouns. Reflexive Pronouns. Demonstrative Pronouns', 'Negative Pronouns. Indefinite Pronouns. Defining Pronouns']
  tenseArr: string[] = ['Simple Tense Forms', 'Continuous Tense Forms', 'Perfect Tense Forms', '•	Perfect Continuous Tense Forms']
  passiveArr: string[] = ['Changing Declarative Sentences into Passive', 'Changing Interrogative Sentences into Passive', 'Choosing Sentences in Passive ']

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
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
}
