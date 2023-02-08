<h1>
  <img
    src="https://github.com/mserajnik/dnh/raw/master/images/logo.png"
    alt="Disegno di Flandre Scarlet fatto da Alphes"
    width="182">
  <br>
  dnh
  <a href="https://marketplace.visualstudio.com/items?itemName=mserajnik.dnh">
    <img
      src="https://img.shields.io/vscode-marketplace/v/mserajnik.dnh.svg"
      alt="dnh sul Marketplace VS Code">
  </a>
  <a href="https://travis-ci.com/mserajnik/dnh">
    <img src="https://travis-ci.com/mserajnik/dnh.svg" alt="Build status">
  </a>
  <a href="https://snyk.io/test/github/mserajnik/dnh">
    <img
      src="https://snyk.io/test/github/mserajnik/dnh/badge.svg"
      alt="Known vulnerabilities">
  </a>
  <a href="https://standardjs.com">
    <img
      src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"
      alt="JavaScript Standard Style">
  </a>
</h1>

> Estensione Touhou Danmakufu per Visual Studio Code

![Esempio di evidenziazione della sintassi][syntax-highlighting-example]

Questa è una semplice estensione [Visual Studio Code][vs-code] che aggiunge alcuni
funzionalità per rendere lo sviluppo di script dnh [Touhou Danmakufu][touhou-danmakufu] più
comodo. Attualmente dispone di:

+ Evidenziazione della sintassi
+ Completamento del codice per funzioni, intestazioni, routine, funzioni della libreria del motore ph3 e dati colpo/oggetto
+ Documentazione su richiesta per funzioni, intestazioni e routine della libreria del motore ph3 e dati colpo/oggetto (al passaggio del mouse)
+ Una varietà di snippets utili

## Table of contents

- [Tavola dei contenuti](#tavola-dei-contenuti)
- [Installazione](#installazione)
  - [Aggiornamento](#aggiornamento)
- [Utilizzo](#utilizzo)
  - [Completamento](#completamento)
  - [Documentazione](#documentazione)
  - [Snippets](#snippets)
- [Manutenzione](#manutenzione)
- [Contributo](#contributo)
- [Licenza](#licenza)
- [Crediti](#crediti)

## Installazione

Usa `l'Apertura Rapida` (<kbd>⌘</kbd> <kbd>P</kbd> su macOS,
<kbd>⌃</kbd> <kbd>P</kbd> su Windows/Linux) su `ext install dnh` o
cercalo e installalo manualmente tramite la scheda `Estensioni`.

### Aggiornamento

VS Code dovrebbe provare ad aggiornare automaticamente l'estensione a intervalli regolari, ma tu
può anche controllare manualmente gli aggiornamenti disponibili tramite
`Estensioni: controlla gli aggiornamenti`.

## Utilizzo

L'apertura dei file ".dnh" con VS Code dovrebbe impostare automaticamente la sintassi corretta
evidenziando e abilitando il completamento del codice, la documentazione e gli snippet, ma tu
può anche impostarlo manualmente tramite `Cambia modalità lingua` (ad esempio, per i file `.txt`
dove VS Code per impostazione predefinita sarebbe testo normale senza evidenziazione).

### Completamento

Il completamento del codice è attualmente disponibile per le funzioni della libreria del motore ph3,
intestazioni, routine e dati colpo/oggetto. Il sistema di completamento viene attivato semplicemente
digitando e cercherà automaticamente di abbinare il risultato più pertinente del file
elenco. Puoi anche navigare nell'elenco con
<kbd>↑</kbd> <kbd>↓</kbd> <kbd>→</kbd> <kbd>←</kbd> e selezionare un completamento a
utilizzo.

Premendo <kbd>Tab ⇥</kbd> verrà inserito il completamento selezionato. Alcuni completamenti
(come le funzioni) avranno punti di tabulazione aggiuntivi che ti permetteranno di navigare nel file
codice inserito con <kbd>Tab ⇥</kbd>. Questo è, ad esempio, utile per la funzione
parametri.

Facendo clic sull'icona `ⓘ` vengono visualizzate ulteriori informazioni sul completamento mentre
facendo clic sull'icona `✕` si nascondono nuovamente queste informazioni (a seconda del proprio
impostazioni, la finestra delle informazioni potrebbe essere aperta per impostazione predefinita).

### Documentazione

La documentazione è disponibile per gli stessi tipi del completamento (libreria del motore ph3
funzioni, intestazioni, routine e dati colpo/oggetto). Si presenta sotto forma di informazioni
finestre che vengono attivate al passaggio del mouse e visualizzano informazioni simili a quando
facendo clic sull'icona `ⓘ` sugli elementi di completamento.

### Snippets
Gli snippet funzionano in modo simile ai completamenti. Sono anche attivati
automaticamente durante la digitazione e visualizzato nello stesso elenco degli elementi di completamento.
Invece di visualizzare la documentazione in una finestra informativa, mostrano il codice che hanno
inserire.

Anche la selezione e l'inserimento funzionano proprio come i completamenti (con
<kbd>↑</kbd> <kbd>↓</kbd> <kbd>→</kbd> <kbd>←</kbd> e <kbd>Tab ⇥</kbd>).
Ove necessario, gli snippet presentano utili tabulazioni per facilitare la navigazione
dopo averli inseriti.

Generalmente hanno una priorità più alta rispetto ai completamenti, il che significa che tu
di solito non è necessario scrivere la parola chiave completa per VS Code per evidenziare il file
snippet corretto nell'elenco.

Di seguito è riportato un elenco di parole chiave associate a uno snippet:

+ `let`
+ `if`
+ `alternative`
+ `loop`
+ `while`
+ `ascent`
+ `local`
+ `yield` (digita `y` e premi <kbd>Tab ⇥</kbd> invece di digitare la parola intera)
+ `function`
+ `task`
+ `include`

## Manutenzione

[mserajnik][maintainer-url]

## Contributo

Siete invitati a dare una mano!

[Apri un problema][issues-url] o invia una richiesta pull.

Come eccezione al paragrafo sotto _[License](#license)_ che lo menziona
non sei autorizzato a utilizzare il file
`server/src/dictionary/files/functions.json` per il tuo software/progetti:

Sei autorizzato a utilizzare questo file allo scopo di _contribuire_ a
[questo progetto][url-progetto]. Ciò include il fork di questo repository, il making
modifiche e la creazione di richieste pull per tali modifiche. Non hai il permesso
per eseguire il fork di questo repository per intenzioni diverse dal contribuire (ad esempio, creare
il tuo progetto senza l'intenzione di unire nuovamente le tue modifiche
upstream) senza rimuovere il file subito dopo.

Inoltre, qualsiasi fork di questo progetto creato con lo scopo di
il contributo __deve__ includere questa sezione e il paragrafo sotto _Licenza_ in
uno stato inalterato per garantire che nessuno crei fork/copie del tuo fork
o lo utilizza o parte di esso nei propri software/progetti è autorizzato a utilizzarlo
`server/src/dictionary/files/functions.json` senza autorizzazione.

## Licenza

[MIT](LICENSE.md) © Michael Serajnik

Esplicitamente escluso dalla licenza MIT è il file
`server/src/dictionary/files/functions.json`. Contiene una versione analizzata di
[Riferimento funzione ph3][riferimento-funzione-riferimento] di [Sparen of Iría][sparen]
e richiede che tu ottenga il suo permesso per usarlo. Il file è quindi sotto
[no license][no-license] e tu __non__ hai il permesso di usarlo nel tuo
software/progetti propri.
## Crediti

La configurazione della sintassi è stata originariamente creata da [drakeirving][drakeirving]
per il suo [Sublime Text extension][sublime-danmakufu]. Mi sono semplicemente convertito
il suo file grammaticale TextMate in JSON, ha apportato alcune modifiche specifiche a VS Code e
ampliato un po'.

La documentazione della funzione della libreria del motore ph3 integrata è una versione analizzata di
[Riferimento alla funzione ph3][riferimento-funzione-sparen] di [Sparen di Iría][sparen],
per il quale è stato così gentile da darmi [il suo permesso](sparen_permission.md)
per usarlo. L'unica cosa che ho fatto è stato trasformarlo in un formato che sia
più facile per me lavorare e applicare alcune trasformazioni automatiche del testo.

Se una funzione si comporta diversamente da quanto dichiarato in questa estensione, per favore
riferimento incrociato con quello di Sparen
[riferimento funzione ph3][riferimento-funzione-sparen] e the
[documentazione ufficiale Danmakufu ph3][touhou-danmakufu-docs] (Giapponese, però
Google Translate o altri servizi di traduzione automatica dovrebbero funzionare
_abbastanza bene_ nella maggior parte dei casi) in quanto potrebbero essere più aggiornati e/o contenere
correzioni per errori.

I [tutorial][sparen-tutorial] di Sparen sono fantastici e dovresti assolutamente
dai un'occhiata se vuoi entrare nello scripting di Danmakufu.

L'icona dell'estensione (di cui puoi vedere anche una versione a risoluzione più alta di at
parte superiore di questo readme) è uno dei [ritratti di Touhou di Alphes][alphes-portraits]
(gratuito da usare e modificare per progetti non commerciali). L'ho semplicemente fatto
quadrato e regolato le dimensioni in modo che si adattino alle linee guida di VS Code Marketplace.
[syntax-highlighting-example]: https://github.com/mserajnik/dnh/raw/master/images/syntax-highlighting-example.png

[vs-code]: https://code.visualstudio.com/
[touhou-danmakufu]: https://en.touhouwiki.net/wiki/Touhou_Danmakufu
[sparen]: https://github.com/sparen
[sparen-function-reference]: https://sparen.github.io/ph3tutorials/docs.html
[no-license]: https://choosealicense.com/no-permission/
[drakeirving]: https://github.com/drakeirving
[sublime-danmakufu]: https://github.com/drakeirving/sublime-danmakufu
[touhou-danmakufu-docs]: http://www.geocities.co.jp/SiliconValley-Oakland/9951/pre/th_dnh_help_v3.html
[sparen-tutorials]: https://sparen.github.io/ph3tutorials/ph3tutorials.html
[alphes-portraits]: http://gensoukyou.1000.tv/dl.html

[maintainer-url]: https://github.com/mserajnik
[issues-url]: https://github.com/mserajnik/dnh/issues/new
[project-url]: https://github.com/mserajnik/dnh
