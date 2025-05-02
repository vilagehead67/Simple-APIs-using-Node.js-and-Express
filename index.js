
const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

const drugs = [

    { 
        id: 1, 
        name: "Amoxicillin", 
        category: "Antibiotic", 
        dosageMg: 500, 
        isPrescriptionOnly: true, 
        stock: 120, 
        manufacturer: "Pfizer" 
    },
   
    { 
        id: 2, 
        name: "Paracetamol", 
        category: "Analgesic", 
        dosageMg: 1000, 
        isPrescriptionOnly: false, 
        stock: 200, 
        manufacturer: "GSK" 
    },
   
    { 
        id: 3, 
        name: "Ibuprofen", 
        category: "Analgesic", 
        dosageMg: 400, 
        isPrescriptionOnly: false, 
        stock: 150, 
        manufacturer: "Bayer" 
    },
   
    { 
        id: 4, 
        name: "Chloroquine", 
        category: "Antimalarial", 
        dosageMg: 250, 
        isPrescriptionOnly: true, 
        stock: 80, 
        manufacturer: "Sanofi" 
    },
   
    { 
        id: 5, 
        name: "Ciprofloxacin", 
        category: "Antibiotic", 
        dosageMg: 500, isPrescriptionOnly: true, 
        stock: 70, 
        manufacturer: "Pfizer" 
    },
   
    { 
        id: 6, 
        name: "Loratadine", 
        category: "Antihistamine", 
        dosageMg: 10, 
        isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { 
        id: 7, 
        name: "Metformin", 
        category: "Antidiabetic", 
        dosageMg: 850, 
        isPrescriptionOnly: true, 
        stock: 140, 
        manufacturer: "Teva" 
    },
   
    { 
        id: 8, 
        name: "Artemether", 
        category: "Antimalarial", 
        dosageMg: 20, 
        isPrescriptionOnly: true, 
        stock: 60, 
        manufacturer: "Roche"
     },
   
    { 
        id: 9, 
        name: "Aspirin", 
        category: "Analgesic", 
        dosageMg: 300, 
        isPrescriptionOnly: false, 
        stock: 180, 
        manufacturer: "Bayer" 
    },
   
    { 
        id: 10, 
        name: "Omeprazole", 
        category: "Antacid", 
        dosageMg: 20, 
        isPrescriptionOnly: true, 
        stock: 90, 
        manufacturer: "AstraZeneca"
     },
   
    { 
        id: 11, 
        name: "Azithromycin",
         category: "Antibiotic", 
         dosageMg: 250, 
         isPrescriptionOnly: true, 
         stock: 50, 
         manufacturer: "Pfizer"
         },
   
    { 
        id: 12, 
        name: "Cetirizine", 
        category: "Antihistamine", 
        dosageMg: 10, 
        isPrescriptionOnly: false, 
        stock: 110, 
        manufacturer: "Novartis" 
    },
   
    { 
        id: 13, 
        name: "Insulin", 
        category: "Antidiabetic", 
        dosageMg: 100, 
        isPrescriptionOnly: true, 
        stock: 30, 
        manufacturer: "Novo Nordisk" 
    },
   
    { 
        id: 14, 
        name: "Artemisinin", 
        category: "Antimalarial", 
        dosageMg: 100, 
        isPrescriptionOnly: true, 
        stock: 50, 
        manufacturer: "GSK" 
    },
   
    { 
        id: 15, 
        name: "Codeine", 
        category: "Analgesic", 
        dosageMg: 30, 
        isPrescriptionOnly: true, 
        stock: 20, 
        manufacturer: "Teva" 
    },
   
    { 
        id: 16, 
        name: "Vitamin C", 
        category: "Supplement", 
        dosageMg: 500, 
        isPrescriptionOnly: false, 
        stock: 300, 
        manufacturer: "Nature’s Bounty" 
    },
   
    { 
        id: 17, 
        name: "Ranitidine", 
        category: "Antacid", 
        dosageMg: 150, 
        isPrescriptionOnly: false, 
        stock: 90, 
        manufacturer: "Sanofi"
     },
   
    { 
        id: 18, 
        name: "Doxycycline", 
        category: "Antibiotic", 
        dosageMg: 100, 
        isPrescriptionOnly: true, 
        stock: 40, 
        manufacturer: "Pfizer" 
    },
   
    { 
        id: 19, 
        name: "Tramadol", 
        category: "Analgesic", 
        dosageMg: 50, 
        isPrescriptionOnly: true, 
        stock: 45, 
        manufacturer: "Teva" 
    },
   
    { 
        id: 20, 
        name: "Folic Acid", 
        category: "Supplement", 
        dosageMg: 5, 
        isPrescriptionOnly: false, 
        stock: 250, 
        manufacturer: "Nature’s Bounty"
     }
   
   ];

//    Number 1
app.get("/drugs/antibiotics", (req, res)=>{
    const filterAntibiotics = drugs.filter(drug =>
        drug.category === "Antibiotic");
    res.json(filterAntibiotics)
})

// Number 2
app.get("/drugs/names", (req, res)=>{
    const drugNamesToLowercase = drugs.map(drug => 
        drug.name.toLocaleLowerCase());
        res.json(drugNamesToLowercase)
})

// Number 3
app.post("/drugs/by-category", (req, res)=>{
    const category = req.body.category
    const check = drugs.find(drug => drug.category.toLocaleLowerCase() === category.toLocaleLowerCase())

    if (!check) {
        res.json(`There is a problem, make sure you confirm your spellings and try again`)
    } else {
        const drugsCategory = drugs.filter(drug => drug.category.toLocaleLowerCase() === category.toLocaleLowerCase())
            res.json(drugsCategory)
    }   
})

// Number 4
app.get("/drugs/names-manufacturers", (req, res) =>{
     const drugInfo = drugs.map(drug => (
         {
         Name: drug.name, 
         Manufacturer: drug.manufacturer
         }
       )
     )
     res.json(drugInfo)
})

// Number 5
app.get("/drugs/prescription", (req, res) =>{
    const prescribedDrugs = drugs.filter(drug =>
        drug.isPrescriptionOnly === true);
        res.json(prescribedDrugs)
})

// Number 6
app.get("/drugs/formatted", (req, res) =>{
    const newArrayInString = drugs.map(drug =>
       `Drug: ${drug.name} - ${drug.dosageMg}mg`
        );
        res.json(newArrayInString)
})

// Number 7
app.get("/drugs/low-stock", (req, res) =>{
    const lowStockDrugs = drugs.filter(drug =>
        drug.stock < 50);
        res.json(lowStockDrugs)
})

// Number 8
app.get("/drugs/non-prescription", (req,res) =>{
    const nonPrescribedDrugs = drugs.filter(drug =>
        !drug.isPrescriptionOnly);
        res.json(nonPrescribedDrugs)
});

// Number 9
app.post("/drugs/manufacturer-count", (req, res) =>{
    const manufacturer = req.body.manufacturer
    const search = drugs.find(drug => drug.manufacturer.toLocaleUpperCase() === manufacturer.toLocaleUpperCase())
    if (!search) {
         res.json(`Check your spellings and try again`)
    } else {
        const manufacturerCount = drugs.filter(drug =>
            drug.manufacturer.toLocaleUpperCase() === manufacturer.toLocaleUpperCase()).length;
            res.json(`${manufacturerCount} drugs are manufactured by this manufacturer`)
    }
})

// Number 10
app.get("/drugs/count-analgesics", (req, res) =>{
    const analgesicsCount = drugs.filter(drug =>
        drug.category === "Analgesic");
        res.json(` The number of drugs from category Analgesics is ${analgesicsCount.length}`)
})


   
