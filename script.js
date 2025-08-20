
// Scroll to the top of the page when it loads
document.documentElement.scrollTop = 0;

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}

if (!window.location.hash) {
    window.location.hash = '#home';
}



// Function for bibtex

    const bibtexEntries = `
    @article{Bassa:2025qru,
    author = "Bassa, Juvenal and Manian, Vidya and Malik, Sudhir and Chattopadhyay, Arghya",
    title = "Jet Image Tagging Using Deep Learning: An Ensemble Model",
    eprint = "2508.10034",
    archivePrefix = "arXiv",
    primaryClass = "physics.data-an",
    month = "8",
    year = "2025"
},
    @article{Basile:2025ylc,
    author = "Basile, Thomas and Boulanger, Nicolas and Chattopadhyay, Arghya",
    title = "Reframing Classical Mechanics: An AKSZ Sigma Model Perspective",
    eprint = "2504.18826",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.3390/universe11060196",
    journal = "Universe",
    volume = "11",
    number = "6",
    pages = "196",
    year = "2025"
},
   @article{Barman_2025,
    author = "Barman, Chanchal K. and Chattopadhyay, Arghya and Sarkar, Surajit and Zhu, Jian-Xin and Nandy, Snehasish",
    title = "Role of disorder in the third-order anomalous Hall effect in time-reversal symmetric systems",
    eprint = "2409.07993 ",
    archivePrefix = "arXiv",
    primaryClass = "[cond-mat.mes-hall]",
    doi = "10.1103/physrevb.111.235113",
    journal = "Physical Review B",
    volume = "111",
    number = "23",
    pages = "",
    year = "2025"
},
    @article{Chattopadhyay:2024dqs,
    author = "Chattopadhyay, Arghya and Mandal, Taniya and Marrani, Alessio",
    title = "Freudenthal duality in conformal field theory",
    eprint = "2406.09259",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1007/JHEP11(2024)057",
    journal = "JHEP",
    volume = "11",
    pages = "057",
    year = "2024"
},
    @article{Chattopadhyay:2024pdj,
    author = "Chattopadhyay, Arghya and Malvimat, Vinay and Mitra, Arpita",
    title = "Krylov complexity of deformed conformal field theories",
    eprint = "2405.03630",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1007/JHEP08(2024)053",
    journal = "JHEP",
    volume = "08",
    pages = "053",
    year = "2024"
},
    @article{Chattopadhyay:2023nfc,
    author = "Chattopadhyay, Arghya and Mandal, Taniya and Marrani, Alessio",
    title = "Generalized Freudenthal duality for rotating extremal black holes",
    eprint = "2312.10767",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1007/JHEP03(2024)170",
    journal = "JHEP",
    volume = "03",
    pages = "170",
    year = "2024"
},
    @article{Dutta:2023sjq,
    author = "Dutta, Parikshit and Chattopadhyay, Arghya",
    title = "Weyl formula and thermodynamics of geometric flow",
    eprint = "2312.09777",
    archivePrefix = "arXiv",
    primaryClass = "math-ph",
    doi = "10.1103/PhysRevD.109.105010",
    journal = "Phys. Rev. D",
    volume = "109",
    number = "10",
    pages = "105010",
    year = "2024"
},
    @article{Chattopadhyay:2023fob,
    author = "Chattopadhyay, Arghya and Mitra, Arpita and van Zyl, Hendrik J. R.",
    title = "Spread complexity as classical dilaton solutions",
    eprint = "2302.10489",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1103/PhysRevD.108.025013",
    journal = "Phys. Rev. D",
    volume = "108",
    number = "2",
    pages = "025013",
    year = "2023"
},
    @article{Chattopadhyay:2022ycb,
    author = "Chattopadhyay, Arghya and Mandal, Taniya and Marrani, Alessio",
    title = "Near-extremal Freudenthal duality",
    eprint = "2212.13500",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1007/JHEP08(2023)014",
    journal = "JHEP",
    volume = "08",
    pages = "014",
    year = "2023"
},
    @article{Chattopadhyay:2022hvn,
    author = "Chattopadhyay, Arghya and M, Nihal and Mukherjee, Debangshu",
    title = "Flow of shear response functions in hyperscaling violating Lifshitz theories",
    eprint = "2207.08611",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1140/epjc/s10052-023-11943-8",
    journal = "Eur. Phys. J. C",
    volume = "83",
    number = "8",
    pages = "771",
    year = "2023"
},
    @article{Chattopadhyay:2021vog,
    author = "Chattopadhyay, Arghya and Mandal, Taniya",
    title = "Freudenthal duality of near-extremal black holes and Jackiw-Teitelboim gravity",
    eprint = "2110.05547",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1103/PhysRevD.105.046014",
    journal = "Phys. Rev. D",
    volume = "105",
    number = "4",
    pages = "046014",
    year = "2022"
},
    @article{Chattopadhyay:2020rle,
    author = "Chattopadhyay, Arghya and Dutta, Suvankar and Mukherjee, Debangshu and Neetu",
    title = "From 2d droplets to 2d Yang-Mills",
    eprint = "2010.11923",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1016/j.nuclphysb.2021.115648",
    journal = "Nucl. Phys. B",
    volume = "974",
    pages = "115648",
    year = "2022"
},
    @article{Chattopadhyay:2019pkl,
    author = "Chattopadhyay, Arghya and Dutta, Suvankar and Mukherjee, Debangshu and Neetu, None",
    title = "Quantum mechanics of Plancherel growth",
    eprint = "1909.06797",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1016/j.nuclphysb.2021.115368",
    journal = "Nucl. Phys. B",
    volume = "966",
    pages = "115368",
    year = "2021"
},
    @article{Chattopadhyay:2019lpr,
    author = "Chattopadhyay, Arghya and Suvankar, Dutta and Neetu",
    title = "Chern-Simons Theory on Seifert Manifold and Matrix Model",
    eprint = "1902.07538",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1103/PhysRevD.100.126009",
    journal = "Phys. Rev. D",
    volume = "100",
    number = "12",
    pages = "126009",
    year = "2019"
},
    @article{Chattopadhyay:2018bzs,
    author = "Chattopadhyay, Arghya and Dutta, Parikshit and Dutta, Suvankar and Ghoshal, Debashis",
    title = "Matrix Model for Riemann Zeta via its Local Factors",
    eprint = "1807.07342",
    archivePrefix = "arXiv",
    primaryClass = "math-ph",
    doi = "10.1016/j.nuclphysb.2020.114996",
    journal = "Nucl. Phys. B",
    volume = "954",
    pages = "114996",
    year = "2020"
},
    @article{Chattopadhyay:2018wkp,
    author = "Chattopadhyay, Arghya and Dutta, Parikshit and Dutta, Suvankar",
    title = "From Phase Space to Integrable Representations and Level-Rank Duality",
    eprint = "1801.07901",
    archivePrefix = "arXiv",
    primaryClass = "hep-th",
    doi = "10.1007/JHEP05(2018)117",
    journal = "JHEP",
    volume = "05",
    pages = "117",
    year = "2018"
},
        @article{Chattopadhyay:2017ckc,
            author = "Chattopadhyay, Arghya and Dutta, Parikshit and Dutta, Suvankar",
            title = "Emergent Phase Space Description of Unitary Matrix Model",
            eprint = "1708.03298",
            archivePrefix = "arXiv",
            primaryClass = "hep-th",
            doi = "10.1007/JHEP11(2017)186",
            journal = "JHEP",
            volume = "11",
            pages = "186",
            year = "2017"
        }
    `;

     const publicationList = document.getElementById('publication-list');

    // Clear existing list items
    publicationList.innerHTML = '';

    // Split BibTeX entries by '@' to separate individual articles
    const articles = bibtexEntries.trim().split('@');
    
    articles.slice(1).forEach(article => { // Skip the first empty entry
        // Extract title, eprint number, and primaryClass using explicit parsing and trimming
        const titleStart = article.indexOf('title = "') + 'title = "'.length;
        const titleEnd = article.indexOf('"', titleStart);
        const title = article.substring(titleStart, titleEnd).trim();

        const eprintStart = article.indexOf('eprint = "') + 'eprint = "'.length;
        const eprintEnd = article.indexOf('"', eprintStart);
        const eprint = article.substring(eprintStart, eprintEnd).trim();

        const primaryClassStart = article.indexOf('primaryClass = "') + 'primaryClass = "'.length;
        const primaryClassEnd = article.indexOf('"', primaryClassStart);
        const primaryClass = article.substring(primaryClassStart, primaryClassEnd).trim();

        if (title && eprint && primaryClass) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `https://arxiv.org/abs/${eprint}`;
            anchor.target = "_blank";
            anchor.textContent = title;

            const info = document.createElement('span');
            info.textContent = ` (arXiv:${eprint}[${primaryClass}])`; // Display eprint number with "arXiv:" prefix and primaryClass in brackets

            listItem.appendChild(anchor);
            listItem.appendChild(info);
            publicationList.appendChild(listItem);

            // Add spacing between publications
            publicationList.appendChild(document.createElement('br'));
        }
    });