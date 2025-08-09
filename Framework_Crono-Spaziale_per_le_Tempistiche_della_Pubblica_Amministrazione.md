# Un nuovo Framework Crono-Spaziale per le Tempistiche della Pubblica Amministrazione Italiana (CSFIPAT)

&nbsp;|&nbsp;
--|--
**Autore:**|Ragnarokkr
**Data:**|11-08-2025
**Versione:**|1.0
**Stato:**|Non farglielo sapere o lo useranno
**Licenza:**|[CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)

-----

## 1. Abstract

Questo documento propone un nuovo algoritmo altamente formalizzato per il calcolo delle tempistiche dei progetti all'interno delle amministrazioni pubbliche. Il **Quadro Crono-Spaziale per le Tempistiche della Pubblica Amministrazione Italiana** (CSFIPAT) introduce due nuovi componenti, contestualmente rilevanti: un **fattore temporale** derivato da un mega-progetto storico italiano e un **fattore spaziale** basato sull'estensione geografica della nazione. Questo quadro mira a fornire una stima delle tempistiche più sfumata, realistica e culturalmente risonante, andando oltre le semplici proiezioni lineari per abbracciare un approccio alla gestione dei progetti più olistico e "*all'italiana*".

## 2. Introduzione

Le metodologie tradizionali di gestione dei progetti spesso non riescono a tenere conto delle complessità socio-storiche e geografiche uniche inerenti alle opere pubbliche su larga scala. Il CSFIPAT affronta questa lacuna introducendo due fattori di correzione meticolosamente definiti che sono intrinsecamente legati al panorama amministrativo e infrastrutturale italiano. Formalizzando questi fattori, intendiamo standardizzare un nuovo metodo, più accurato, per la stima delle date di completamento dei progetti.

## 3. L'Epoca dello Stretto di Messina (ESM)

### 3.1 Definizione

L'**Epoca dello Stretto di Messina** (ESM) è definita come il tempo trascorso (in anni) dalla prima proposta registrata per un ponte sullo Stretto di Messina al giorno della formalizzazione di questo progetto. Questo periodo serve come nostra unità fondamentale di calcolo temporale, riconoscendo le profonde radici storiche e burocratiche dei grandi progetti infrastrutturali.

> **Nota:** Per la continua accuratezza e rilevanza di questo quadro, è necessario che il valore del Fattore Temporale dello Stretto di Messina sia formalmente aggiornato e rivisto ogni 10 anni, o in occasione di significativi traguardi del progetto relativi al Ponte sullo Stretto di Messina.

### 3.2 Calcolo

La prima proposta conosciuta per un ponte sullo Stretto di Messina è attribuita a **Plinio il Vecchio**, filosofo e condottiero romano nato nel 23 d.C. Ai fini di questo algoritmo, useremo l'anno **1866**, che segna il primo incarico ufficiale del governo italiano di redigere i piani per un ponte tra Calabria e Sicilia[^1].

- Sia **$T_{inizio}$** la data di inizio degli studi ufficiali ($1866$).
- Sia **$T_{riferimento}$** la data corrente ($2025$).

La durata totale dell'Epoca dello Stretto di Messina (ESM) è data da:

**$T_{ESM} = T_{riferimento} - T_{inizio} = 2025 - 1866 = 159$**

### 3.3 Normalizzazione e Fattorizzazione

Per derivare il fattore di correzione temporale macroscopico, normalizziamo l'ESM usando il tempo medio necessario per completare una macro opera di ingegneria pubblica. Ai fini di questo quadro, si presume che questo tempo medio sia di **10 anni**.

- Sia **$T_{ESM}$** il numero di anni dell'Epoca dello Stretto di Messina ($159 \text{ anni}$).
- Sia **$A_{media}$** il tempo medio presunto per il completamento di una macro opera di ingegneria pubblica ($10 \text{ anni}$).

Il Fattore Temporale dello Stretto di Messina ($F_{ESM}$) è definito come:

**$F_{ESM} = \frac{T_{ESM}}{A_{media}} = \frac{159 \text{ anni}}{10 \text{ anni}} = 15.9$**

Questo fattore, che rappresenta il rapporto tra la durata di un progetto storico e la durata di un progetto standard, sarà applicato a tutti i calcoli delle tempistiche.

## 4. La Componente Spaziale di Viaggio (CSV)

### 4.1 Definizione

La **Componente Spaziale di Viaggio** (CSV) è un fattore di correzione basato sulla strada percorribile più lunga in Italia. Introduce un elemento fisico e geografico nel calcolo delle tempistiche, riconoscendo le sfide di un paese lungo e stretto. Il fattore è calcolato come il tempo che impiegherebbe una persona a percorrere a piedi l'intera lunghezza della strada, normalizzato a un'unità di tempo standard.

### 4.2 Calcolo

Ai fini di questo algoritmo, useremo la **Strada Statale 16** (SS16), nota anche come "**Adriatica**", che si estende per **1000,67 km**[^2] dal punto più settentrionale a quello più meridionale. Questa lunghezza specifica e ufficialmente riconosciuta serve come rappresentazione precisa dell'estensione infrastrutturale della nazione.

- Sia **$L_{SS16}$** la lunghezza della SS16 ($1000,67 \text{ km}$).
- Sia **$V_{camminata}$** la velocità media di camminata, che è una media stimata di $5 \text{ km/h}$ per un adulto tipico[^3].

Il tempo per percorrere a piedi l'intera lunghezza della SS16 è:

**$T_{camminata} = \frac{L_{SS16}}{V_{camminata}} = \frac{1000,67 \text{ km}}{5 \text{ km/h}} \approx 200,134 \text{ ore}$**

Per normalizzare questo valore in un fattore adimensionale, useremo un'unità base di una singola giornata lavorativa, che è di $8 \text{ ore}$.

Il **Fattore Spaziale di Viaggio** ($F_{S}$) è definito come:

**$F_{S} = \frac{T_{camminata}}{8 \text{ ore}} = \frac{200,134 \text{ ore}}{8 \text{ ore}} \approx 25,01675$**

Questo fattore racchiude lo "*stiramento*" del tempo e delle risorse lungo l'intero paese.

## 5. I Fattori Micro-Burocratici (FMB)

### 5.1 Il Fattore Crono-Spaziale della Macchina del Caffè ($F_{MC}$)

Questo fattore tiene conto del tempo perso a causa del rituale amministrativo italiano per eccellenza: **la pausa caffè**. È un fattore composito basato sul numero di dipendenti, sulla lunghezza della coda e sulla distanza fisica dalla macchina del caffè.

- Sia **$N_{dipendenti}$** il numero di dipendenti in ufficio nelle ore di punta.
- Sia **$P_{caffè}$** la percentuale media stimata di persone che bevono caffè (es. $70 \text{\%}$ o $0,70$).
- Sia **$T_{preparazione}$** il tempo medio per scegliere e preparare un caffè dalla macchina, stimato in $300 \text{ s}$.
- Sia **$L_{coda}$** la lunghezza stimata della coda (in numero di persone).
- Sia **$D_{mc}$** la distanza dalla postazione di lavoro media alla macchina del caffè (in metri).
- Sia **$V_{camminata}$** la velocità media di camminata di un impiegato, stimata in $1,3\overline8 \text{ m/s}$.

Il numero di persone che bevono caffè è:

**$N_{bevitori} = N_{dipendenti} \times P_{caffè}$**

Il fattore di ritardo della coda è una funzione lineare della lunghezza della coda:

**$F_{ritardo_coda} = L_{coda} + 1$**

dove $+1$ tiene conto della persona alla macchina.

Il fattore di ritardo della distanza si basa sul tempo di viaggio da e per la macchina:

**$T_{viaggio} = 2 \times D_{mc}$
$F_{ritardo_distanza} = 1 + \frac{T_{viaggio}}{V_{camminata}} = 1 + \frac{2 \times D_{mc}}{1,3\overline8 \text{ metri/secondo}}$**

Il **Fattore Crono-Spaziale della Macchina del Caffè** è definito come:

**$F_{MC} = N_{bevitori} \times (T_{preparazione} \times F_{ritardo_coda} + F_{ritardo_distanza})$**

Ad esempio, se sono presenti 30 dipendenti ($P_{caffè} = 0,70$), la coda è lunga 5 persone e la macchina del caffè si trova a 15 metri di distanza:

$N_{bevitori} = 30 \times 0,70 = 21$
$F_{ritardo_coda} = 5 + 1 = 6$
$F_{ritardo_distanza} = 1 + \frac{2 \times 15}{1,3\overline8} = 1 + 21,6 = 22,6$
$F_{MC} = 21 \times (300 \text{ secondi} \times 6 + 22,6) = 21 \times (1.800 + 22,6) = 21 \times 1.822,6 = 38.274,6 \text{ s}$

Per normalizzarlo in un fattore adimensionale, dividiamo per un'unità di tempo di base (es. $1 \text{ h}$, o $3.600 \text{ s}$):

**$F_{MC_normalizzato} = \frac{38.274,6}{3.600} \approx 10,6318\overline3$**

### 5.2 Il Fattore di Correzione del Tempo da Sigaretta ($F_{Sig}$)

Questo fattore corregge il tempo perso durante le pause sigaretta, un'attività frequente in molti ambienti amministrativi. Si basa sul tempo medio per fumare una singola sigaretta e sul numero medio di sigarette fumate al giorno.

- Sia **$T_{fumo}$** il tempo medio per fumare una singola sigaretta, stimato in $5 \text{ min}$.
- Sia **$N_{sigarette}$** il numero medio di sigarette fumate al giorno da un adulto, stimato in $12$[^4].
- Sia **$P_{fumatori}$** la percentuale media stimata di dipendenti che fumano, es. $24 \text{\%}$ o $0,24$[^4].

Il tempo totale perso al giorno a causa delle pause sigaretta è:

**$T_{perdita_fumo} = N_{dipendenti} \times P_{fumatori} \times \lparen \frac{N_{sigarette}}{24} \times 8 \rparen \times T_{fumo}$**

Ad esempio, con 30 dipendenti, il 24% dei quali fuma una media di 12 sigarette al giorno:

**$T_{perdita_fumo} = 30 \times 0,24 \times \lparen \frac{12}{24} \times 8 \rparen \times 5 = 144 \text{ minuti}$**

Questo valore viene normalizzato a un periodo di lavoro giornaliero. Supponendo una giornata lavorativa di 8 ore (480 minuti), il fattore di correzione è:

**$F_{Sig} = \frac{480}{480 - T_{perdita_fumo}} = \frac{480}{480 - 144} = \frac{480}{336} \approx 1,\overline{428571}$**

Ai fini della formula finale, usiamo un valore fisso e arrotondato:

**$F_{Sig} = 1,43$**

### 5.3 Il Fattore Giorni Non Operativi ($F_{GNO}$)

Questo fattore tiene conto del tempo perso a causa di festività nazionali, fine settimana e ferie dei dipendenti. È una correzione cruciale per la tempistica lineare standard, riflettendo la realtà dell'interruzione del lavoro su base regolare.

- Sia **$F_{nazionali}$** il numero di festività nazionali in Italia, che è $11$.
- Sia **$G_{weekend}$** il numero di giorni del fine settimana in un anno ($52 \text{ settimane} \times 2 \text{ giorni/settimana} = 104$ giorni).
- Sia **$T_{ferie}$** il numero di giorni di ferie retribuite per dipendente all'anno, che è in genere 26 giorni.
- Sia **$F_{regionali}$** un valore di correzione per bilanciare il numero sconosciuto di festività regionali e altri giorni non lavorativi locali. Assumiamo un valore prudente di $2$ giorni.
- Sia **$N_{giorni_lavorativi}$** il numero totale di giorni in un anno (365,25).

Il numero totale di giorni non operativi in un anno ($T_{non_op}$) è la somma di tutti questi fattori:

**$T_{non_op} = F_{nazionali} + G_{weekend} + T_{ferie} + F_{regionali} = 11 + 104 + 26 + 2 = 143 \text{ giorni}$**

Il numero di giorni operativi in un anno ($T_{op}$) è:

**$T_{op} = N_{giorni_lavorativi} - T_{non_op} = 365,25 - 143 = 222,25 \text{ giorni}$**

Il **Fattore Giorni Non Operativi** ($F_{GNO}$) è il rapporto tra il numero totale di giorni e i giorni operativi, che rappresenta la proporzione di cui una tempistica deve essere estesa per tenere conto di tutti i periodi non lavorativi.

**$F_{GNO} = \frac{N_{giorni_lavorativi}}{T_{op}} = \frac{365,25}{222,25} \approx 1,6434195725534309$**

Ai fini della formula finale, usiamo un valore arrotondato:

**$F_{GNO} = 1,64$**

## 6. L'Algoritmo Crono-Spaziale Completo

### 6.1 La Tempistica di Base

- Sia $D_{base}$ il numero di giorni stimato per un progetto utilizzando metodi tradizionali, lineari e ottimistici. Questo è il nostro punto di partenza.

### 6.2 La Formula del CSFIPAT

La tempistica finale e corretta del progetto ($D_{finale}$) viene calcolata applicando tutti i fattori temporali e spaziali alla tempistica di base.

La formula è la seguente:

**$D_{finale} = D_{base} \times F_{ESM} \times F_{CSV} \times F_{MC} \times F_{Sig} \times F_{GNO}$**

Dove:

- **$D_{finale}$** è il numero finale stimato di giorni.
- **$D_{base}$** è la stima iniziale, ottimistica, in giorni.
- **$F_{ESM}$** è il Fattore Temporale dello Stretto di Messina ($15,9$).
- **$F_{CSV}$** è il Fattore Spaziale di Viaggio ($25,01675$).
- **$F_{MC}$** è il Fattore Crono-Spaziale della Macchina del Caffè ($10,63$).
- **$F_{Sig}$** è il Fattore di Correzione del Tempo da Sigaretta ($1,43$).
- **$F_{GNO}$** è il Fattore Giorni Non Operativi ($1,64$).

### 6.3 Esempio

Consideriamo un progetto di pubblica amministrazione con una tempistica tradizionale e ottimistica di 100 giorni.
L'ufficio ha 30 dipendenti ($P_{caffè} = 0,70$), una coda per il caffè di 5 persone e la macchina si trova a 15 metri di distanza.

$D_{base} = 100$ giorni.
$F_{ESM} = 15,9$
$F_{S} = 25,01675$
$F_{MC} = 10,63$
$F_{Sig} = 1,43$
$F_{GNO} = 1,64$

$D_{finale} = 100 \times 15,9 \times 25,01675 \times 10,63 \times 1,43 \times 1,64$
$D_{finale} = 991.610,61 \text{ giorni}$

Per convertirlo in anni, dividiamo per $365,25$:

$T_{finale} = \frac{1.000.916,78}{365,25} \approx 2.714,88$ anni.

## 7. Conclusione e Lavori Futuri

Il CSFIPAT fornisce un quadro solido, scientificamente fondato e culturalmente sensibile per la stima delle tempistiche nelle amministrazioni pubbliche. Riconoscendo le profonde realtà temporali e spaziali di un progetto, dalla scala nazionale macroscopica fino al microscopico ambiente d'ufficio, possiamo fornire alle parti interessate una visione più realistica e completa delle durate dei progetti.

I lavori futuri includono:

1. Perfezionare il fattore $F_{ESM}$ per includere altri progetti nazionali di lunga durata.
1. Sviluppare un modello stocastico per incorporare le probabilità di ritardo burocratico e le lunghezze di coda variabili.
1. Indagare l'impatto di altri micro-fattori, come le pause pranzo e le conversazioni improvvisate.

[^1]: [https://it.wikipedia.org/wiki/Ponte_sullo_Stretto_di_Messina\#Storia](https://www.google.com/search?q=https://it.wikipedia.org/wiki/Ponte_sullo_Stretto_di_Messina%23Storia)
[^2]: [https://it.wikipedia.org/wiki/Strada_statale_16_Adriatica](https://it.wikipedia.org/wiki/Strada_statale_16_Adriatica)
[^3]: [https://it.wikipedia.org/wiki/Andatura_umana\#Velocit%C3%A0_media](https://www.google.com/search?q=https://it.wikipedia.org/wiki/Andatura_umana%23Velocit%25C3%25A0_media)
[^4]: [https://www.epicentro.iss.it/passi/dati/fumo](https://www.epicentro.iss.it/passi/dati/fumo)
