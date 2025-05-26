document.addEventListener('DOMContentLoaded', () => {

    // --- Army Data ---
    // You will update this section with your actual army details
    const armyData = {
        dark_angels: {
            name: "Dark Angels",
            playerName: "Player A (Lion's Chosen)",
            crusadePoints: 120,
            battlesPlayed: 10,
            battlesWon: 8,
            requisitionPoints: 5,
            supplyLimit: "75 PL",
            description: "The Unforgiven, ever hunting the Fallen. They bring swift judgment and unwavering loyalty to the Imperium, though shrouded in ancient secrets.",
            units: ["Deathwing Knights", "Ravenwing Black Knights", "Azrael, Supreme Grand Master"]
        },
        adeptus_custodes: {
            name: "Adeptus Custodes",
            playerName: "Player B (Golden Legion)",
            crusadePoints: 95,
            battlesPlayed: 8,
            battlesWon: 6,
            requisitionPoints: 3,
            supplyLimit: "60 PL",
            description: "The Emperor's personal guard, the Ten Thousand. Each warrior is a hero, a bulwark against any threat to the Golden Throne.",
            units: ["Custodian Guard Squad", "Allarus Custodians", "Vertus Praetors"]
        },
        tyranids: {
            name: "Tyranids",
            playerName: "Player C (Hive Fleet Leviathan)",
            crusadePoints: 150,
            battlesPlayed: 12,
            battlesWon: 10,
            requisitionPoints: 7,
            supplyLimit: "100 PL",
            description: "The Great Devourer, an extragalactic swarm consuming all biomass in its path. Adaptable, relentless, and utterly alien.",
            units: ["Hive Tyrant", "Termagant Brood", "Carnifex"]
        },
        adeptus_mechanicus: {
            name: "Adeptus Mechanicus",
            playerName: "Player D (Forge World Metallica)",
            crusadePoints: 70,
            battlesPlayed: 7,
            battlesWon: 4,
            requisitionPoints: 2,
            supplyLimit: "50 PL",
            description: "Seekers of knowledge and servants of the Omnissiah. They wield arcane technology and legions of Skitarii to defend the Imperium's machine spirits.",
            units: ["Skitarii Rangers", "Onager Dunecrawler", "Tech-Priest Dominus"]
        },
        aeldari: {
            name: "Aeldari (Craftworld Ulthwé)",
            playerName: "Player E (Children of Stars)",
            crusadePoints: 88,
            battlesPlayed: 9,
            battlesWon: 5,
            requisitionPoints: 4,
            supplyLimit: "65 PL",
            description: "An ancient and dwindling race, the Aeldari fight to preserve their legacy against a hostile galaxy, guided by their Farseers.",
            units: ["Guardian Defenders", "Farseer Skyrunner", "Wraithknight"]
        },
        tau: {
            name: "T'au Empire (T'au Sept)",
            playerName: "Player F (For the Greater Good)",
            crusadePoints: 110,
            battlesPlayed: 9,
            battlesWon: 7,
            requisitionPoints: 6,
            supplyLimit: "70 PL",
            description: "A young, technologically advanced xenos empire spreading the philosophy of the Greater Good, often through superior firepower.",
            units: ["Fire Warrior Strike Team", "XV8 Crisis Battlesuits", "Riptide Battlesuit"]
        },
        thousand_sons: {
            name: "Thousand Sons",
            playerName: "Player G (Sorcerers of Prospero)",
            crusadePoints: 135,
            battlesPlayed: 10,
            battlesWon: 9,
            requisitionPoints: 5,
            supplyLimit: "80 PL",
            description: "Masters of sorcery and servants of Tzeentch. Once loyal Space Marines, now they seek forbidden knowledge and twist reality to their will.",
            units: ["Rubric Marines", "Scarab Occult Terminators", "Ahriman"]
        },
        ultra_marines: {
            name: "Ultra Marines",
            playerName: "Player H (Sons of Guilliman)",
            crusadePoints: 100,
            battlesPlayed: 8,
            battlesWon: 7,
            requisitionPoints: 4,
            supplyLimit: "70 PL",
            description: "Exemplars of the Codex Astartes, the Ultramarines are disciplined, versatile, and a cornerstone of the Imperium's might.",
            units: ["Intercessor Squad", "Redemptor Dreadnought", "Roboute Guilliman (if applicable)"]
        },
        death_guard: {
            name: "Death Guard",
            playerName: "Player I (Nurgle's Chosen)",
            crusadePoints: 145,
            battlesPlayed: 11,
            battlesWon: 9,
            requisitionPoints: 6,
            supplyLimit: "90 PL",
            description: "Blessed by Grandfather Nurgle, the Death Guard are implacable, resilient, and spreaders of decay and pestilence.",
            units: ["Plague Marines", "Blightlord Terminators", "Mortarion (if applicable)"]
        },
        adeptus_custodes_silver: { // Unique key for the second Custodes army
            name: "Adeptus Custodes (Shadowkeepers)",
            playerName: "Player J (The Argent Watch)",
            crusadePoints: 80,
            battlesPlayed: 7,
            battlesWon: 5,
            requisitionPoints: 3,
            supplyLimit: "55 PL",
            description: "A conclave of the Adeptus Custodes known as the Shadowkeepers, guardians of the Dark Cells beneath the Imperial Palace.",
            units: ["Custodian Wardens", "Sagittarum Guard", "Shield-Captain on Dawneagle Jetbike"]
        }
        // Add other armies here...
    };

    // --- Modal Elements ---
    const modal = document.getElementById('armyDetailsModal');
    const closeButton = document.querySelector('.close-button');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    const modalArmyName = document.getElementById('modalArmyName');
    const modalPlayerName = document.getElementById('modalPlayerName');
    const modalCrusadePoints = document.getElementById('modalCrusadePoints');
    const modalBattlesPlayed = document.getElementById('modalBattlesPlayed');
    const modalBattlesWon = document.getElementById('modalBattlesWon');
    const modalRP = document.getElementById('modalRP');
    const modalSupplyLimit = document.getElementById('modalSupplyLimit');
    const modalDescription = document.getElementById('modalDescription');
    const modalUnitsList = document.getElementById('modalUnits');

    // --- Functions ---
    function displayArmyDetails(armyKey) {
        const army = armyData[armyKey];
        if (army) {
            modalArmyName.textContent = army.name;
            modalPlayerName.textContent = army.playerName || 'N/A';
            modalCrusadePoints.textContent = army.crusadePoints;
            modalBattlesPlayed.textContent = army.battlesPlayed;
            modalBattlesWon.textContent = army.battlesWon;
            modalRP.textContent = army.requisitionPoints;
            modalSupplyLimit.textContent = army.supplyLimit;
            modalDescription.textContent = army.description || 'No specific lore available.';

            modalUnitsList.innerHTML = ''; // Clear previous units
            if (army.units && army.units.length > 0) {
                army.units.forEach(unit => {
                    const li = document.createElement('li');
                    li.textContent = unit;
                    modalUnitsList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No notable units listed.';
                modalUnitsList.appendChild(li);
            }

            modal.style.display = 'block';
        } else {
            console.error("Army data not found for key:", armyKey);
        }
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // --- Event Listeners ---
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const armyKey = button.getAttribute('data-army');
            displayArmyDetails(armyKey);
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close modal if user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Hamburger menu toggle (modernized, accessible)
    const hamburger = document.getElementById('hamburger');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    if (hamburger && mobileNavOverlay) {
        hamburger.addEventListener('click', function() {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
            mobileNavOverlay.setAttribute('aria-hidden', expanded);
            document.body.classList.toggle('nav-open', !expanded);
        });
        // Close mobile nav when clicking outside nav
        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === mobileNavOverlay) {
                hamburger.setAttribute('aria-expanded', false);
                mobileNavOverlay.setAttribute('aria-hidden', true);
                document.body.classList.remove('nav-open');
            }
        });
        // Keyboard accessibility: close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
                hamburger.setAttribute('aria-expanded', false);
                mobileNavOverlay.setAttribute('aria-hidden', true);
                document.body.classList.remove('nav-open');
            }
        });
    }

});