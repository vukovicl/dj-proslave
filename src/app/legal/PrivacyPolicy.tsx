import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "politika-privatnosti",
    "Politika Privatnosti | DJ Proslave",
    "Pročitajte našu politiku privatnosti i saznajte kako štitimo vaše osobne podatke.",
    "politika privatnosti, zaštita podataka, privatnost"
  );
}

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#0a0b10] border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
      {children}
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-[color:var(--color-accent-gold)] mb-6 flex items-center gap-4">
      {children}
      <div className="flex-grow h-px bg-white/10"></div>
    </h2>
  );

  const Subtitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-medium text-white mt-8 mb-4 border-l-[3px] border-[color:var(--color-accent-gold)] pl-4">
      {children}
    </h3>
  );

  const CustomList = ({ children }: { children: React.ReactNode }) => (
    <ul className="list-none space-y-3 mt-4 text-gray-400">
      {children}
    </ul>
  );

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
      <span className="text-[color:var(--color-accent-gold)] mt-1.5 text-xs">●</span>
      <span>{children}</span>
    </li>
  );

  const Paragraph = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <p className={`text-gray-400 leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[100px] md:pt-[150px] pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-white/90 drop-shadow-md">
              Politika Privatnosti
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--color-accent-gold)] tracking-[0.2em] uppercase mb-8 opacity-90">
              Premium DJ Usluge
            </p>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent opacity-70 mb-12"></div>
            <div className="inline-block px-6 py-3 rounded-full border border-[color:var(--color-accent-gold)]/40 bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <p className="text-sm md:text-base text-[color:var(--color-accent-gold)] font-medium tracking-wide">
                Posljednje ažurirano: 25. kolovoza 2026.
              </p>
            </div>
          </div>

          <Card>
            <SectionTitle>1. Uvod</SectionTitle>
            <Paragraph>
              Dobrodošli u našu Politiku privatnosti. Zaštita Vaših osobnih podataka je naš prioritet i obveza koju shvaćamo krajnje ozbiljno. Ovaj dokument detaljno objašnjava kako prikupljamo, koristimo, čuvamo i štitimo Vaše osobne podatke u skladu sa Općom uredbom o zaštiti podataka (GDPR) i svim primjenjivim hrvatskim zakonima.
            </Paragraph>
            <Paragraph>
              Ova politika primjenjuje se na sve usluge koje pružamo, uključujući rezervacije, konzultacije, izvođenje na događajima i svu komunikaciju putem naše web stranice i drugih kanala.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>2. Voditelj Obrade Podataka</SectionTitle>
            <Paragraph>
              Voditelj obrade osobnih podataka je tim DJ Proslave.<br />
              <strong className="text-gray-300">Adresa/Sjedište:</strong> Zagreb, Hrvatska<br />
              <strong className="text-gray-300">Kontakt e-mail:</strong> <a href="mailto:proslave.dj@gmail.com" className="text-[color:var(--color-accent-gold)] hover:underline">proslave.dj@gmail.com</a>
            </Paragraph>
            <Paragraph>
              Ova web stranica služi isključivo za informativne upite. Za sva pitanja, zahtjeve ili nedoumice vezane uz obradu Vaših osobnih podataka, možete nas kontaktirati na navedeni e-mail.
            </Paragraph>
            <Paragraph>
              Vaša prava su naša obveza. Pravo na privatnost nije samo zakonska obveza – to je temelj povjerenja između nas i naših klijenata.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>3. Podaci Koje Prikupljamo</SectionTitle>
            <Paragraph>
              Kako bismo Vam pružili vrhunsku uslugu i profesionalno iskustvo, prikupljamo sljedeće kategorije osobnih podataka:
            </Paragraph>
            
            <Subtitle>3.1 Podaci koje prikupljamo putem kontakt forme</Subtitle>
            <CustomList>
              <ListItem>Ime i prezime</ListItem>
              <ListItem>E-mail adresa</ListItem>
              <ListItem>Broj telefona</ListItem>
              <ListItem>Datum događaja</ListItem>
              <ListItem>Sadržaj Vaše poruke</ListItem>
            </CustomList>

            <Subtitle>3.2 Podaci koje prikupljamo naknadno (tijekom e-mail dogovora)</Subtitle>
            <CustomList>
              <ListItem>Adresa lokacije za izvođenje usluge</ListItem>
              <ListItem>Specifični glazbeni zahtjevi</ListItem>
              <ListItem>Broj gostiju i ostali detalji potrebni isključivo ako se odlučite za našu uslugu</ListItem>
            </CustomList>

            <Subtitle>3.3 Tehnički Podaci</Subtitle>
            <CustomList>
              <ListItem>IP adresa</ListItem>
              <ListItem>Tip preglednika i uređaja</ListItem>
              <ListItem>Podaci o korištenju web stranice (analitika)</ListItem>
              <ListItem>Kolačići (cookies) za poboljšanje korisničkog iskustva</ListItem>
            </CustomList>
          </Card>

          <Card>
            <SectionTitle>4. Svrha Obrade Podataka</SectionTitle>
            <Paragraph>Vaše osobne podatke koristimo isključivo u sljedeće svrhe:</Paragraph>
            <CustomList>
              <ListItem><strong className="text-gray-300">Obrada informativnih upita:</strong> Sastavljanje i slanje neobvezujućih ponuda na temelju Vašeg upita putem kontakt forme.</ListItem>
              <ListItem><strong className="text-gray-300">Komunikacija:</strong> Odgovaranje na pitanja i dogovaranje detalja vezanih uz događaj.</ListItem>
              <ListItem><strong className="text-gray-300">Pružanje usluge:</strong> Priprema i izvođenje DJ usluge prema postignutom dogovoru.</ListItem>
            </CustomList>
          </Card>

          <Card>
            <SectionTitle>5. Pravna Osnova Obrade</SectionTitle>
            <Paragraph>Vaše osobne podatke obrađujemo na temelju sljedećih pravnih osnova:</Paragraph>
            <CustomList>
              <ListItem><strong className="text-gray-300">Predugovorne radnje i dogovor:</strong> Obrada je nužna kako bismo na Vaš zahtjev komunicirali o uvjetima i mogućnosti pružanja usluge.</ListItem>
              <ListItem><strong className="text-gray-300">Legitimni interes:</strong> Zaštita prava i rješavanje eventualnih prigovora.</ListItem>
              <ListItem><strong className="text-gray-300">Privola (suglasnost):</strong> Obrada podataka o Vašem ponašanju na stranici putem analitičkih kolačića (Google Analytics) vrši se isključivo ako nam za to date izričitu privolu putem skočnog prozora (cookie banner).</ListItem>
            </CustomList>
          </Card>

          <Card>
            <SectionTitle>6. Dijeljenje Podataka s Trećim Stranama</SectionTitle>
            <Paragraph>
              Vaše osobne podatke ne prodajemo, ne iznajmljujemo i ne dijelimo s trećim stranama u komercijalne svrhe. Podaci mogu biti podijeljeni samo u sljedećim situacijama:
            </Paragraph>
            <CustomList>
              <ListItem>Sa zakonskim i državnim tijelima isključivo kada postoji stroga zakonska obveza.</ListItem>
              <ListItem>S pružateljima IT i analitičkih usluga koji nam tehnički omogućavaju rad stranice i analizu posjeta (npr. tvrtka hosting usluga te Google Ireland Limited za uslugu Google Analytics, isključivo ako ste za nju dali privolu).</ListItem>
            </CustomList>
            <Paragraph className="mt-4">
              Svi naši partneri podliježu strogim ugovornim obvezama za zaštitu podataka i ne smiju ih koristiti u vlastite svrhe.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>7. Čuvanje i Zaštita Podataka</SectionTitle>
            <Paragraph>
              Sigurnost Vaših podataka je za nas ključna. Implementirali smo najsuvremenije tehničke i organizacijske mjere zaštite:
            </Paragraph>
            <CustomList>
              <ListItem>Korištenje SSL/TLS enkripcije za svu komunikaciju na web stranici</ListItem>
              <ListItem>Stroga kontrola pristupa podacima</ListItem>
              <ListItem>Redovito sigurnosno kopiranje i ažuriranje sustava</ListItem>
            </CustomList>
            <Paragraph className="mt-6">
              <strong className="text-gray-300">Razdoblje čuvanja:</strong> Vaše osobne podatke iz informativnih upita čuvamo isključivo dok traje naša komunikacija. Ako ne dođe do dogovora o usluzi, Vaši podaci iz upita brišu se u roku od 6 mjeseci. Ako se dogovor ostvari, podaci se čuvaju do izvršenja usluge i isteka roka za eventualne prigovore.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>8. Vaša Prava</SectionTitle>
            <Paragraph>U skladu s GDPR-om, imate sljedeća prava vezana uz Vaše osobne podatke:</Paragraph>
            <CustomList>
              <ListItem><strong className="text-gray-300">Pravo na pristup:</strong> Možete zatražiti potvrdu obrađuju li se Vaši podaci.</ListItem>
              <ListItem><strong className="text-gray-300">Pravo na ispravak:</strong> Možete tražiti ispravak netočnih podataka.</ListItem>
              <ListItem><strong className="text-gray-300">Pravo na brisanje ("pravo na zaborav"):</strong> Možete tražiti brisanje podataka pod određenim uvjetima.</ListItem>
              <ListItem><strong className="text-gray-300">Pravo na ograničenje obrade:</strong> U određenim situacijama možete tražiti pauziranje obrade.</ListItem>
              <ListItem><strong className="text-gray-300">Pravo na prigovor:</strong> Možete uložiti prigovor na obradu podataka.</ListItem>
              <ListItem><strong className="text-gray-300">Pravo na prigovor nadzornom tijelu:</strong> Ako smatrate da je obrada Vaših osobnih podataka u suprotnosti s Općom uredbom o zaštiti podataka (GDPR), imate pravo podnijeti prigovor Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb, web: <a href="https://azop.hr" target="_blank" rel="noreferrer" className="text-[color:var(--color-accent-gold)] hover:underline">azop.hr</a>.</ListItem>
            </CustomList>
            <Paragraph className="mt-4">
              Za ostvarivanje bilo kojeg od ovih prava, kontaktirajte nas putem kontakt podataka navedenih u nastavku. Odgovorit ćemo na Vaš zahtjev u roku od 30 dana.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>9. Kolačići (Cookies)</SectionTitle>
            <Paragraph>
              Naša web stranica koristi kolačiće kako bi poboljšala Vaše korisničko iskustvo i omogućila pravilno funkcioniranje stranice. Kolačići su male tekstualne datoteke koje se pohranjuju na Vašem uređaju.
            </Paragraph>
            <Paragraph>Vrste kolačića koje koristimo:</Paragraph>
            <CustomList>
              <ListItem><strong className="text-gray-300">Neophodni kolačići:</strong> Ključni za osnovne funkcije stranice.</ListItem>
              <ListItem><strong className="text-gray-300">Analitički kolačići:</strong> Pomažu nam razumjeti kako posjetitelji koriste stranicu. Ovi kolačići ne postavljaju se automatski. Na Vaš uređaj učitavaju se isključivo ako im date privolu klikom na gumb 'Prihvaćam' na našoj obavijesti o kolačićima (cookie banner). Svoju privolu možete povući u bilo kojem trenutku.</ListItem>
            </CustomList>
            <Paragraph className="mt-4">
              Možete kontrolirati i brisati kolačiće kroz postavke Vašeg preglednika. Imajte na umu da onemogućavanje određenih kolačića može utjecati na funkcionalnost stranice.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>10. Promjene Politike Privatnosti</SectionTitle>
            <Paragraph>
              Zadržavamo pravo ažuriranja ove Politike privatnosti kako bismo odražavali promjene u našim praksama, tehnologiji ili zakonskim zahtjevima. O svim značajnim promjenama ćemo Vas obavijestiti putem e-maila ili obavijesti na web stranici.
            </Paragraph>
            <Paragraph>
              Preporučujemo da povremeno pregledate ovu stranicu kako biste bili informirani o tome kako štitimo Vaše podatke.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>11. Maloljetnici</SectionTitle>
            <Paragraph>
              Naše usluge nisu namijenjene osobama mlađim od 18 godina. Svjesno ne prikupljamo osobne podatke od maloljetnika. Ako saznamo da smo prikupili podatke od maloljetnika bez roditeljskog pristanka, poduzet ćemo korake za brisanje tih podataka.
            </Paragraph>
          </Card>

          <div className="mt-12 p-8 md:p-12 bg-gradient-to-b from-[#0a0b10] to-[#050505] border border-white/10 rounded-2xl text-center shadow-[0_0_40px_rgba(212,175,55,0.05)] relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[color:var(--color-accent-gold)] opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Za sva pitanja, zahtjeve ili nedoumice vezane uz obradu Vaših osobnih podataka, slobodno nas kontaktirajte:
              </p>
              <a 
                href="mailto:proslave.dj@gmail.com" 
                className="inline-flex items-center justify-center px-10 h-14 bg-[color:var(--color-accent-gold)] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#ffdf73] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] leading-none pt-1"
              >
                Pošaljite nam E-mail
              </a>
              <p className="mt-6 text-[color:var(--color-accent-gold)] font-medium tracking-wide">
                proslave.dj@gmail.com
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
