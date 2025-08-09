# Un nuovo Framework Crono-Spaziale per le Tempistiche della Pubblica Amministrazione Italiana (CSFIPAT)

&nbsp;|&nbsp;
--|--
**Autore:**|Ragnarokkr
**Data:**|August 9, 2025  
**Versione:**|1.0  
**Stato:**|Non fateglielo sapere, altrimenti lo useranno.
**Licenza:**|[CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

## 1. Abstract

Il presente documento propone un nuovo algoritmo altamente formalizzato per il calcolo delle tempistiche dei progetti all'interno delle pubbliche amministrazioni. Il Framework Crono-Spaziale per le Tempistiche della Pubblica Amministrazione (CSFIPAT) introduce diverse componenti innovative e contestualmente rilevanti: un fattore temporale macroscopico derivato da un mega-progetto storico italiano, un fattore spaziale macroscopico basato sull'estensione geografica della nazione e un nuovo insieme di fattori microscopici che tengono conto delle dinamiche interne all'ufficio. Questo framework mira a fornire una stima delle tempistiche più sfumata, realistica e culturalmente risonante, superando le proiezioni lineari semplicistiche per abbracciare un approccio più olistico e "all'italiana" alla gestione dei progetti.

## 2. Introduzione

Le metodologie tradizionali di gestione dei progetti spesso non riescono a tenere conto delle complessità socio-storiche, geografiche e quotidiane intrinseche nelle opere pubbliche su larga scala. Il CSFIPAT affronta questa lacuna introducendo fattori di correzione meticolosamente definiti che sono intrinsecamente legati al panorama amministrativo e infrastrutturale italiano, nonché al micro-ambiente del luogo di lavoro. Formalizzando questi fattori, miriamo a standardizzare un nuovo metodo più accurato per la stima delle date di completamento dei progetti.

## 3. L'Epoca del Ponte sullo Stretto di Messina (ESM)

### 3.1 Definizione

L'Epoca del ponte sullo Stretto di Messina (ESM) è definita come il tempo trascorso dalla prima proposta documentata per un ponte sullo Stretto di Messina fino al giorno d'oggi. Questo periodo funge da nostra unità fondamentale di calcolo temporale, riconoscendo le profonde radici storiche e burocratiche dei grandi progetti infrastrutturali. Per garantire la costante accuratezza e rilevanza di questo quadro, è necessario aggiornare e rivedere formalmente il valore del Fattore Temporale dello Stretto di Messina ogni 10 anni, oppure al raggiungimento di tappe significative del progetto relative al Ponte sullo Stretto di Messina.

### 3.2 Calcolo

La proposta più antica conosciuta per un ponte sullo Stretto di Messina è attribuita a Plinio il Vecchio, filosofo e comandante militare romano nato nel 23 d.C. Ai fini di questo algoritmo, utilizzeremo l'anno 1866, che segna il primo incarico ufficiale del governo italiano per la stesura dei piani per un ponte tra la Calabria e la Sicilia. La data odierna è il 9 agosto 2025.

- Sia $T_{inizio}$ la data di inizio degli studi ufficiali (1866-01-01).  
- Sia $T_{oggi}$ la data odierna (2025-08-09).  

La durata totale dell'Epoca del ponte sullo Stretto di Messina (ESM) è data da:
$T_{ESM} = T_{oggi} - T_{inizio}$

$T_{ESM}$ in anni è approssimativamente $2025.61 - 1866.00 \approx 159.61$ anni.

### 3.3 Normalizzazione e Fattorizzazione

Per ricavare il fattore di correzione temporale macroscopico, normalizziamo l’MSE usando il tempo medio richiesto per il completamento di una grande opera pubblica. Ai fini di questo quadro, tale tempo medio è assunto pari a 10 anni.

- Sia $Y_{ESM}$ il numero di anni nell’Epoca dello Stretto di Messina (159,61 anni).
- Sia $Y_{medio}$ il tempo medio di completamento di una grande opera pubblica (10 anni).

Il Fattore Temporale dello Stretto di Messina (Fₜ) è definito come:
$F_{T} = \frac{Y_{ESM}}{Y_{medio}} = \frac{159.61 \text{ anni}}{10 \text{ anni}} = 15.961$

Questo fattore, che rappresenta il rapporto tra la durata di un progetto storico e un anno standard, verrà applicato a tutti i calcoli delle tempistiche.

> **Nota:** Per la continua accuratezza e rilevanza di questo framework, è richiesto che il valore del Fattore Temporale dello Stretto di Messina ($F_{T}$) sia formalmente aggiornato e rivisto ogni 10 anni, o in occasione di significativi traguardi del progetto del Ponte sullo Stretto di Messina.

## 4. La Componente Spaziale di Trasferimento (CST)

### 4.1 Definizione

La Componente Spaziale di Trasferimento (CST) è un fattore di correzione basato sulla strada percorribile più lunga d’Italia. Introduce un elemento fisico e geografico nel calcolo della linea temporale, riconoscendo le sfide di un Paese lungo e stretto. Il fattore viene calcolato come il tempo impiegato da una persona per percorrere a piedi l’intera lunghezza della strada, normalizzato a un’unità di tempo standard.

### 4.2 Calcolo

Ai fini di questo algoritmo, utilizzeremo la Strada Statale 16 (SS16), nota anche come "Adriatica", che si estende per 1.000,06 km dai suoi punti più settentrionali a quelli più meridionali. Questa specifica lunghezza, ufficialmente riconosciuta, serve come rappresentazione precisa dell'estensione infrastrutturale della nazione.

- Sia $L_{SS16}$ la lunghezza della SS16 (1.000,06 km).
- Sia $V_{ped}$ la velocità media di camminata, stimata in 5 km/h per un adulto tipico.

Il tempo per percorrere a piedi l’intera lunghezza della SS16 è:
$T_{ped} = \frac{L_{SS16}}{V_{ped}} = \frac{1.000,06 \text{ km}}{5 \text{ km/h}} \approx 200,012 \text{ ore}$

Per normalizzare questo valore in un fattore adimensionale, utilizzeremo come unità di base una giornata lavorativa di 8 ore.

Il **Componente Spaziale di Trasferimento** (**$F_{S}$**) è definito come:
$F_{S} = \frac{T_{ped}}{8 \text{ ore}} = \frac{200,012 \text{ ore}}{8 \text{ ore}} \approx 25,0015$

Questo fattore incapsula il "dilatarsi" del tempo e delle risorse lungo l'intero paese.

## 5. I Fattori Micro-Burocratici (FMB)

### 5.1 Il Fattore Crono-Spaziale della Macchina del Caffè ($F_{CM}$)

Questo fattore tiene conto del tempo perso nel rito amministrativo per eccellenza: la pausa caffè. È un fattore composito basato sul numero di dipendenti, sulla lunghezza della coda e sulla distanza fisica dalla macchina del caffè.

- Sia $N_{dipendenti}$ il numero di dipendenti in ufficio nelle ore di punta.
- Sia $P_{caffè}$ la percentuale media stimata di persone che bevono caffè (es. 70% o 0.70).
- Sia $T_{prep}$ il tempo medio per scegliere e preparare un caffè dalla macchina, stimato in 300 secondi.
- Sia $L_{coda}$ la lunghezza stimata della coda (in numero di persone).
- Sia $D_{cm}$ la distanza dalla postazione di lavoro media alla macchina del caffè (in metri).
- Sia $V_{ped}$ la velocità media di deambulazione di un impiegato, stimata in 1 m/s.

Il numero di consumatori di caffè è
$N_{consumatori} = N_{dipendenti} \times P_{caffè}$.

Il fattore di ritardo per la coda è una funzione lineare della lunghezza della fila:
$F_{ritardo\_coda} = L_{coda} + 1$ (dove +1 rappresenta la persona attualmente alla macchina del caffè).

Il fattore di ritardo per distanza si basa sul tempo di andata e ritorno fino alla macchina del caffè:
$T_{distanza} = 2 \times D_{cm}$  
$F_{ritardo\_distanza} = 1 + \frac{T_{distanza}}{V_{ped}} = 1 + \frac{2 \times D_{cm}}{1 \text{ metro/secondo}} = 1 + \lparen 2 \times D_{cm} \rparen$

Il Fattore Crono-Spaziale della Macchina del Caffè ($F_{CM}$) è definito come:
$F_{CM} = N_{consumatori} \times (T_{prep} \times F_{ritardo\_coda} + F_{ritardo\_distanza})$

Ad esempio, se sono presenti 30 dipendenti ($P_{caffè} = 0,70$), la coda è di 5 persone e la macchina del caffè dista mediamente 15 metri:  
$N_{consumatori} = 30 \times 0,70 = 21$  
$F_{ritardo\_coda} = 5 + 1 = 6$  
$F_{ritardo\_distanza} = 1 + \lparen 2 \times 15 \rparen = 1 + 30 = 31$  
$F_{CM} = 21 \times (300 \text{ secondi} \times 6 + 31) = 21 \times (1.800 + 31) = 21 \times 1.831 = 38.451$ (in secondi)

Per normalizzare questo in un fattore adimensionale, dividiamo per un’unità di tempo di base (ad es., 1 ora, ovvero 3.600 secondi):
$F_{CM\_normalizzato} = \frac{38.451}{3.600} \approx 10,68$

### 5.2 Il Fattore di Correzione del Tempo Sigaretta ($F_{Sig}$)

Questo fattore corregge il tempo perso durante le pause sigaretta, un'attività frequente in molti ambienti amministrativi. Si basa sul tempo medio per fumare una singola sigaretta e sul numero medio di sigarette fumate al giorno.

- Sia $T_{fumo}$ il tempo medio per fumare una singola sigaretta, stimato in 5 minuti.
- Sia $N_{sigarette}$ il numero medio di sigarette fumate al giorno da un tipico impiegato, stimato in 3.
- Sia $P_{fumatori}$ la percentuale media stimata di dipendenti fumatori, ad es. 30% o 0,30.

Il tempo totale perso al giorno a causa delle pause sigaretta è:  
$T_{perdita\_fumo} = N_{dipendenti} \times P_{fumatori} \times N_{sigarette} \times T_{fumo}$

Ad esempio, con 30 dipendenti, il 30% dei quali fuma una media di 3 sigarette al giorno:  
$T_{perdita\_fumo} = 30 \times 0,30 \times 3 \times 5 \text{ minuti} = 135 \text{ minuti}$

Questo valore viene normalizzato su un periodo di lavoro giornaliero. Supponendo una giornata lavorativa di 8 ore (480 minuti), il fattore di correzione è:  
$F_{Sig} = \frac{480}{480 - T_{perdita\_fumo}} = \frac{480}{480 - 135} = \frac{480}{345} \approx 1,39$

Ai fini della formula finale, utilizzeremo un valore fisso e arrotondato:  
$F_{Sig} = 1,39$

## 6. L'Algoritmo Crono-Spaziale Completo

### 6.1 La Tempistica Base

- Sia $D_{base}$ il numero di giorni stimato per un progetto utilizzando metodi tradizionali, lineari e ottimistici. Questo è il nostro punto di partenza.

### 6.2 La Formula CSFIPAT

La tempistica finale e corretta del progetto ($D_{finale}$) viene calcolata applicando tutti i fattori temporali e spaziali alla tempistica base.

La formula è la seguente:  
$D_{finale} = D_{base} \times F_{T} \times F_{S} \times F_{CM} \times F_{Sig}$

Dove:  

- $D_{finale}$ è il numero di giorni stimato finale.
- $D_{base}$ è la stima iniziale e ottimistica in giorni.
- $F_{T}$ è il Fattore Temporale dello Stretto di Messina (15,961).
- $F_{S}$ è il Fattore Spaziale di Trasferimento (25,0015).
- $F_{CM}$ è il Fattore Crono-Spaziale della Macchinetta del Caffè (10,68).
- $F_{Sig}$ è il Fattore di Correzione del Tempo Sigaretta (1,39).

### 6.3 Esempio

Si consideri un progetto della pubblica amministrazione con una tempistica tradizionale e ottimistica di 100 giorni.  
L'ufficio ha 30 dipendenti ($P_{caffè} = 0,70$), una coda per il caffè di 5 persone e la macchinetta dista 15 metri.

$D_{base} = 100$ giorni
$F_{T} = 15,961$  
$F_{S} = 25,0015$  
$F_{CM} = 10,68$  
$F_{Sig} = 1,39$

$D_{finale} = 100 \times 15,961 \times 25,0015 \times 10,68 \times 1,39$  
$D_{finale} = 592.396,1$ giorni.

Per convertire in anni, dividiamo per 365.25:  
$T_{finale} = \frac{592.396,1}{365.25} \approx 1.621,9$ anni.

## 7. Conclusione e Lavori Futuri

Il CSFIPAT fornisce un framework solido, scientificamente fondato e culturalmente sensibile per la stima delle tempistiche nelle pubbliche amministrazioni. Riconoscendo le profonde realtà temporali e spaziali di un progetto, dalla scala macroscopica nazionale a quella microscopica dell'ambiente d'ufficio, possiamo fornire agli stakeholder una visione più realistica e completa della durata dei progetti.

I lavori futuri includono:

1. Perfezionare il fattore $F_{T}$ includendo altri progetti nazionali di lunga durata.
2. Sviluppare un modello stocastico per incorporare le probabilità di ritardo burocratico e le lunghezze variabili delle code.
3. Indagare l'impatto di altri micro-fattori, come le pause pranzo e le conversazioni improvvisate.
