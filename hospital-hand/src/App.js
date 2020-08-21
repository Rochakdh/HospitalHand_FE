import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Input } from 'semantic-ui-react';
import View from './containers/View';
import Home from './containers/Home';

import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllDoctors from './containers/AllDoctors';
import LoginForm from './containers/LoginForm';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';



export default class App extends Component {
  state = {
    categories: [
      {
        id: 1, Category: "Anesthesiology", Info: "Surgical patients with anesthesia needs",
        More: "With a team of dedicated anesthesiologists, working in close cohesion with the surgeons; this department takes care of surgical patients with anesthesia needs. With the best ventilators and anesthesia stations, everyone in the department works for the best interest of the patient leaving no chances for complications."
      },
      {
        id: 2, Category: "Cardiology and Cardiac Surgery", Info: "Heart",
        More: "Cardiology as a team takes care of heart diseases and hypertension and has also performed hundreds of interventions when needed, for example - angiographies, angioplasties, pacemaker placement, etc. The department has its own set of sophisticated modern Echocardiography machine and TMT machine. Also with the best in-class CathLab, our team of experts know how to keep the heart healthy and moving."
      },
      {
        id: 3, Category: "Cardiothoracic and Vascular Surgery", Info: "Blood Vessels and hypertension",
        More: "A very specialized team of surgeons who take care of surgical interventions for heart and major blood vessels. With a modular OT available 24 x 7, our surgeons are ready for surgery of the heart, thorax and the blood vessels when needed without delay."
      },
      {
        id: 4, Category: "Critical Care Medicine", Info: "ICU/HICU",
        More: "The hospital has 20  intensive care beds, dedicated to patients who need the most intensive care to overcome dire situations. With the best in class international standard ICU/HICU, this department has taken care of more than 1000 sick patients just in the last year."
      },
      {
        id: 5, Category: "Dentistry and Dental Surgery", Info: "Teeth",
        More: "Diseases of the Oral Cavity (Mouth and Teeth) is taken care by the Department of Dentistry and Dental Surgery. Be it carries or diseases of the gum and tongue, our specialists also take care of the mal-aligned teeth, do complicated surgeries of the oral cavity, surgeries for the cancers and for trauma. A beautifully designed department feels welcoming and our patients have loved the ambience."
      },
      {
        id: 6, Category: "Department of Neuro Sciences", Info: "Nervous System",
        More: "The brain and the nerves play a vital role in a patient’s well-being. Diseases of these organs need meticulous workup and treatment. At our department of Neurology, the patients are completely evaluated, diagnosed, discussed and treatment is started with close follow up. With the EEG machine in the department, it’s easy for patient who need this investigation."
      },
      {
        id: 7, Category: "Dermatovenerology and Cosmetic Dermatology", Info: "Skin",
        More: "This department takes care of various skin diseases and cosmetic problems. Be it acne, vitiligo or psoriasis, our team of specialists with the state of the art modern laser and phototherapy machines, treat patients for the best possible results. This department also treats sexually transmitted diseases too."
      },
      {
        id: 8, Category: "Emergency Medicine and EMS", Info: "Emergency",
        More: "A fully equipped Emergency Department with 2 Ambulances and facility for Heli rescue makes the Department of Emergency Medicine and Rapid Rescue one of the safest healthcare facility when it comes to need for urgent medical and surgical care. Headed by a specialist round the clock, the team is always ready to handle any cases of trauma or medical surgical emergencies."
      },
      {
        id: 9, Category: "Endocrinology and Diabetology", Info: "Hormones",
        More: "Endocrinology and Diabetology is a super specialty that deals with the diseases of hormones, be it thyroid disease or diabetes. Our renowned specialist would be able to clinch the diagnosis and treat as per the international standards."
      },
      {
        id: 10, Category: "ENT and Head Neck Surgery", Info: "Ear, Nose, Throat, Head, Neck",
        More: "This department is dedicated to the diseases of the Ear, Nose and Throat. This super specialist surgical field takes care of all the problems of these very vital organs. Besides the non-surgical treatment plans, this department has been doing various surgical interventions for the diseases of the head and neck. With modern technologies and machines, the surgeries done at ours have yielded better results and early back to normal life of our patients."
      },
      {
        id: 11, Category: "Gastroenterology and Hepatology", Info: "Stomach, Intestines and Liver",
        More: "A department that takes care of diseases of digestive system that includes the stomach, intestines and liver. With a dedicated department for endoscopy and colonoscopy, the procedures can be done without delay and patients can feel relaxed with the privacy and comfort."
      },
      {
        id: 12, Category: "General Surgery, Digestive Diseases and Laparoscopic Surgery", Info: "Surgery",
        More: "Minimally Invasive Surgery,Hepato Pancreatico Biliary and Gastro Surgery,Bariatric Surgery,Breast and Thoracic Surgery"
      },
      {
        id: 13, Category: "Geriatric Medicine", Info: "Old Age Diseases",
        More: "Geriatric medicine is a branch of medicine that is committed to the idea of preventive medicine for the elderly. It deals with the clinical, psychological, and social aspects of patients over 60 years of age, and assures that an elderly person receive accurate diagnosis, treatment, and support—most importantly, in the right time—for a comprehensive assessment and management of the wellbeing of the old. This specialty consists of a detailed list of problems affecting the patient via a Comprehensive Geriatric Assessment (CGA)."
      },
      {
        id: 14, Category: "Infectious Diseases", Info: "Communicable Diseases",
        More: "The field of infectious disease includes diagnosis and management of complicated bacterial infections such as joint, heart valve (endocarditis), central nervous system and lung infections, tuberculosis, malaria, dengue, kala-azar and other parasite infections, HIV, fungal infections and evaluation of individuals with prolonged fever. With the support of the best microbiology laboratory in the country, this department has diagnosed and taken care of sophisticated infections of various sites.The field of infectious disease includes diagnosis and management of complicated bacterial infections such as joint, heart valve (endocarditis), central nervous system and lung infections, tuberculosis, malaria, dengue, kala-azar and other parasite infections, HIV, fungal infections and evaluation of individuals with prolonged fever. With the support of the best microbiology laboratory in the country, this department has diagnosed and taken care of sophisticated infections of various sites."
      },
      {
        id: 15, Category: "Internal Medicine", Info: "Physician",
        More: "Department of Internal Medicine is the first line of patient investigation and management. It is the medical specialty dealing with the prevention, diagnosis, and treatment of adult diseases. Our Physicians are skilled in the management of patients who have undifferentiated or multi-system disease processes."
      },
      {
        id: 16, Category: "Laboratory Services", Info: "Lab",
        More: "It Consists of two Departments: Pathology and Microbiology"
      },
      {
        id: 17, Category: "Neonatal and Pediatric Surgery", Info: "New Born and Children Surgery",
        More: "This department deals with emergency and elective surgical diseases of newborns to 18 years of age. We also deal with prenatal counseling about fetal surgical issues for better post natal care and further management. Neonatal surgical problems are birth defects and anomalies. Pediatric surgical diseases are general and common pediatric surgery, pediatric urology, pediatric surgical oncology and pediatric Burns."
      },
      {
        id: 18, Category: "Neonatal Critical Care", Info: "Children ICU",
        More: "This department deals with emergency and elective surgical diseases of newborns to 18 years of age. We also deal with prenatal counseling about fetal surgical issues for better post natal care and further management. Neonatal surgical problems are birth defects and anomalies. Pediatric surgical diseases are general and common pediatric surgery, pediatric urology, pediatric surgical oncology and pediatric Burns."
      },
      {
        id: 19, Category: "Nephrology and Transplant Medicine", Info: "Kidney and Transplantation",
        More: "Department of Nephrology deals with diseases of the Kidney. With a modern dialysis center which is available 24x7, this department has helped many patients who need diagnosis and treatment of kidney diseases. Our specialists are well trained from prestigious universities take care of all kidney diseases and are also ready to start renal transplant after the government approval."
      },
      {
        id: 20, Category: "Obstetrics and Gynecology", Info: "Child Birth and Women Reproductive Diseases",
        More: "Department of Obstetrics and Gynecology takes care of women’s reproductive and fertility issues. A strong team of gynecologists take care of the women planning to conceive, do their antenatal checkup and counselling. When the women is ready to deliver the baby, our dedicated labor room has facilities of painless labor or if needed cesarean sections can be done any hour of the day and night so that the healthy newborn can be delivered without complications."
      },
      {
        id: 21, Category: "Oncology", Info: "Cancer",
        More: "After a cancer diagnosis is made, it is the oncologist's role to explain the cancer diagnosis and the meaning of the disease stage to the patient; discuss various treatment options; recommend the best course of treatment; deliver optimal care; and improve quality of life both through curative therapy and palliative care with pain and symptom management. Our Oncologists take care of each patient individually to provide the best quality of care to the cancer patients."
      },
      {
        id: 22, Category: "Ophthalmology and Vision Sciences", Info: "Eye",
        More: "Department of Ophthalmology and Vision Sciences is one of the most deligently setup department at GIH. With two Operation Theaters with all modern machines and technologies, our team of ophthalmology specialists take care of most ailments of the eyes and vision. The team includes specialist nurses and optometrists to make the diagnosis and treatment better."
      },
      {
        id: 23, Category: "Orthopedics and Traumatology", Info: "Bones and Joints",
        More: "Consists of Arthroscopy, Sports Medicine and Joint Replace. Also Spine Services and Traumatology"
      },
      {
        id: 24, Category: "Pediatrics and Neonatology", Info: "New Born and Children",
        More: "We have Services for General Pediatrics, Pediatric Pulmonology and Pediatric Surgery."
      },
      {
        id: 25, Category: "Physiotherapy and Rehabilitation", Info: "Physical Therapy",
        More: "Physiotherapy as it’s called in common terms, is a specialization where professionals help patients of various orthopedic and neurologic problems gain their functionality back. They are dedicated team of experts with a well setup department, who have been loved by many national level atheletes as well."
      },
      {
        id: 26, Category: "Plastic, Reconstructive and Cosmetic Surgery", Info: "Plastic Surgery",
        More: "Department of Plastic Reconstructive and Cosmetic Surgery has a highly specialized team of plastic surgeons who takes care of patients using various kinds of reconstructive and cosmetic surgery. Plastic Reconstructive surgery is done to correct deformities due to different causes like trauma, burn, cancer resection, congenital diseases, bedsores etc. The department also provides hand surgery services which is  a super-specialized service that focusses on hand conditions like tendon and nerve repair / grafting, Brachial plexus injury, tendon transfers, congenital anomalies, contractures, policization, toe transfer, replantation."
      },
      {
        id: 27, Category: "Psychiatry", Info: "Mental Illness",
        More: "This Department takes care of the mental and emotional wellbeing. As defined by the WHO, mental wellbeing is one of the major component of a person’s health. A team of psychiatrists take care of these patients. Our specialists are well trained. With care and concern for the patient and the family, they treat each individual with required effort and dedication."
      },
      {
        id: 28, Category: "Pulmonary Medicine", Info: "Lungs",
        More: "Diseases of the Lungs and Chest are major diseases of older generation. They need specialist care when it comes to chronic or complicated diseases. With senior pulmonologist in the team, this department is complete with Spirometer in the department itself."
      },
      {
        id: 29, Category: "Radiology and Interventions", Info: "Xray, MRI, CT-Scan",
        More: "Diagnostic Radiology and Interventional Radiology Services"
      },
      {
        id: 30, Category: "Transfusion Medicine and Blood Bank", Info: "Blood Bank",
        More: "Our Blood Bank is capable of storing donated blood, separating the components and immediately supplying when needed. Since blood is to be donated to keep the reserve adequate, The Blood Bank has been doing blood donation awareness programs as well."
      },
      {
        id: 31, Category: "Urology and Kidney Transplant Surgery", Info: "Kidney Surgery",
        More: "This department deals with the disease of the urinary system, who need surgical interventions. Diseases of kidneys, ureters, the urinary bladder, prostate or urethra - all are taken care by this team of specialists, which consists of the experienced and well trained surgeons. They use minimally invasive techniques where possible to take care of kidney stones, enlarged prostates and many other surgical problems of the urinary system."
      },
      {
        id: 32, Category: "Wellness and Family Medicine", Info: "Family Medicine",
        More: "Wellness Center is a new concept for Nepal. It is a dedicated department for preventive health checkups and early identification and management of diseases. Various health checkup packages have been designed according to the needs of our clients. A team of Family Physicians do the initial workup and evaluation during the follow-up."
      }
    ],
    query: "",
    results: [],
  }

  onSearchChange = (event) => {
    const value = event.target.value;
    const { categories } = this.state
    this.setState({ query: value });
    const results = categories.filter((categories) => {
      const regex = new RegExp(value, "gi");
      return categories.Category.match(regex);
    });
    this.setState({ results });
  }

  render() {
    const { categories, results, query } = this.state
    const data = results.length === 0 && !query ? categories : results;
    return (
      <Router>
        <div >
          <Route path="/categories" component={View}>
            <Container >
              <div style={{ paddingTop: 2 + "em" }}>
                <h1 style={{ paddingLeft: 15 + "em" }}> Select The Category</h1>
                <Input
                  icon="search"
                  placeholder="Search Department"
                  onChange={this.onSearchChange}
                ></Input>
                <View data={data}></View>

              </div>

            </Container >
          </Route>

          <Route path="/doctors" component={AllDoctors}>
            
          </Route>

          <Route path='/' exact component={Home}>
            <Home />
          </Route>
          <Route path='/login' component={LoginForm}>
            <LoginForm />
          </Route>
          <Route path='/profile' exact component={Profile}>
            <Profile />
          </Route>
          <Route path='/signup' exact component={SignUp}>
            <SignUp />
          </Route>
        </div>
      </Router>
  


    )
  }
}
