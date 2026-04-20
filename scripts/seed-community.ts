import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI!

const questions = [
  // PILES
  { title: "What foods should I completely avoid if I have piles?", body: "I have Grade 2 piles. My doctor gave me a basic list but I want to know specifically which foods make piles worse and which help.", category: "Piles & Proctology", name: "Ravi K", city: "Delhi" },
  { title: "Can piles go away on their own without surgery?", body: "I have had bleeding piles for 3 months. My mother says piles can go away naturally with diet changes. Is this true?", category: "Piles & Proctology", name: "Anonymous", city: "Gurugram" },
  { title: "How long does laser piles surgery last? Will it come back?", body: "I am considering laser surgery for Grade 3 piles. My main worry is recurrence. What are the chances of piles coming back after laser surgery?", category: "Piles & Proctology", name: "Suresh M", city: "Noida" },
  { title: "Is stapler surgery (MIPH) better than laser for Grade 4 piles?", body: "I have Grade 4 piles with significant prolapse. My surgeon is recommending MIPH stapler surgery. Is this really better than laser for Grade 4?", category: "Piles & Proctology", name: "Deepak R", city: "Mumbai" },
  { title: "How much does piles laser surgery cost in Bangalore?", body: "I live in Bangalore and have been diagnosed with Grade 3 piles. Looking for a realistic cost estimate for laser surgery in Bangalore.", category: "Piles & Proctology", name: "Anonymous", city: "Bangalore" },
  { title: "Can I go to the office the next day after piles surgery?", body: "I work in IT and my job is desk based. How soon can I return to office after laser piles surgery?", category: "Piles & Proctology", name: "Priya S", city: "Pune" },
  { title: "What is the difference between internal and external piles?", body: "My doctor said I have both internal and external piles. Can someone explain the difference and if both need to be treated differently?", category: "Piles & Proctology", name: "Ankit T", city: "Delhi" },
  { title: "Does sitting on cold floor cause piles? What actually causes them?", body: "My grandmother says piles are caused by sitting on cold floor. My doctor said it is diet and constipation. Who is right?", category: "Piles & Proctology", name: "Meena P", city: "Chennai" },
  { title: "Piles during pregnancy — what treatment is safe?", body: "I am 24 weeks pregnant and suffering from very painful piles. What treatment options are safe during pregnancy?", category: "Piles & Proctology", name: "Anonymous", city: "Kochi" },
  { title: "Is piles surgery covered by CGHS and ESI?", body: "I am a government employee with CGHS. Will laser piles surgery be covered? What is the procedure to get it approved?", category: "Insurance & Cost", name: "Ramesh N", city: "Delhi" },
  // CIRCUMCISION
  { title: "At 28 years old — is adult circumcision safe?", body: "I am 28 years old and considering laser circumcision for phimosis. Are there additional risks at this age compared to childhood circumcision?", category: "Circumcision & Urology", name: "Anonymous", city: "Delhi" },
  { title: "How soon can I return to gym after laser circumcision?", body: "I go to the gym 5 days a week. How long do I need to avoid gym after laser circumcision?", category: "Circumcision & Urology", name: "Anonymous", city: "Mumbai" },
  { title: "My foreskin is very tight — is this definitely phimosis?", body: "I cannot retract my foreskin at all. Does this mean I definitely need circumcision or is there another option?", category: "Circumcision & Urology", name: "Anonymous", city: "Bangalore" },
  { title: "ZSR ring has not fallen off after 12 days — is this normal?", body: "I had ZSR circumcision 12 days ago. The ring has not fallen off yet. Doctor said 7-10 days. Should I be worried?", category: "Circumcision & Urology", name: "Anonymous", city: "Gurugram" },
  { title: "Will circumcision affect sensitivity during sex?", body: "I am very concerned that circumcision will reduce sensitivity. Is this true? I have heard contradicting information.", category: "Circumcision & Urology", name: "Anonymous", city: "Noida" },
  { title: "Cost of circumcision for my 3-year-old son in Delhi?", body: "We are Muslim and want to get our 3-year-old son circumcised for religious reasons. What is the cost at a reputable hospital in Delhi and what is the procedure?", category: "Circumcision & Urology", name: "Farouk A", city: "Delhi" },
  { title: "Is preputioplasty better than circumcision for mild phimosis?", body: "My urologist gave me two options — preputioplasty (foreskin widening) or full circumcision. I have mild phimosis. Which is better?", category: "Circumcision & Urology", name: "Anonymous", city: "Chennai" },
  { title: "Can I drive home after laser circumcision?", body: "I am coming alone for the procedure. Will I be able to drive myself home after laser circumcision or do I need someone with me?", category: "Circumcision & Urology", name: "Anonymous", city: "Pune" },
  { title: "Is circumcision covered by Mediclaim for phimosis?", body: "I have been diagnosed with phimosis. Will my Star Health policy cover circumcision surgery? What documents are needed?", category: "Insurance & Cost", name: "Vijay S", city: "Ahmedabad" },
  { title: "White discharge under foreskin — sign I need circumcision?", body: "I have white smegma build-up under my foreskin and recurrent mild infections. Does this mean I need circumcision?", category: "Circumcision & Urology", name: "Anonymous", city: "Lucknow" },
  // MTP
  { title: "Can I take abortion pills at home without going to hospital?", body: "I am 6 weeks pregnant and cannot go to hospital due to privacy concerns. Can I take mifepristone and misoprostol at home?", category: "MTP & Gynecology", name: "Anonymous", city: "Delhi" },
  { title: "I am 11 weeks pregnant — is surgical abortion safe?", body: "I am 11 weeks pregnant and want to terminate. Is surgical abortion (S&E) safe at 11 weeks? What should I expect?", category: "MTP & Gynecology", name: "Anonymous", city: "Gurugram" },
  { title: "How painful is D&C? Will I be awake during it?", body: "My doctor recommended D&C. I am very anxious about pain. Will I be awake or asleep? How painful is it?", category: "MTP & Gynecology", name: "Anonymous", city: "Mumbai" },
  { title: "How long after MTP can I try to get pregnant again?", body: "I had a surgical MTP 3 weeks ago. I want to try for a baby in a few months. How long should I wait and will MTP affect my fertility?", category: "MTP & Gynecology", name: "Anonymous", city: "Bangalore" },
  { title: "Positive pregnancy test 3 weeks after medical abortion — is it normal?", body: "I had medical abortion (pills) 3 weeks ago but my home pregnancy test is still showing positive. Does this mean the abortion was incomplete?", category: "MTP & Gynecology", name: "Anonymous", city: "Chennai" },
  // HERNIA
  { title: "How do I know if my hernia needs surgery immediately?", body: "I have been told I have a small inguinal hernia. My doctor says we can watch and wait. How do I know if it has become dangerous and needs emergency surgery?", category: "Hernia", name: "Pradeep K", city: "Delhi" },
  { title: "Can hernia come back after laparoscopic repair with mesh?", body: "My father had laparoscopic hernia repair with mesh 2 years ago. He now has some swelling in the same area. Can hernia recur after mesh repair?", category: "Hernia", name: "Sunita K", city: "Noida" },
  { title: "Hernia surgery at 65 years old — is it safe?", body: "My father is 65 and has been diagnosed with bilateral inguinal hernia. His cardiologist has cleared him for surgery. Is hernia surgery safe at this age?", category: "Hernia", name: "Rohit S", city: "Gurugram" },
  { title: "What is the difference between TEP and TAPP hernia repair?", body: "My surgeon mentioned both TEP and TAPP for laparoscopic hernia repair. What is the difference and which is better?", category: "Hernia", name: "Anonymous", city: "Mumbai" },
  { title: "Can I lift weights after hernia mesh repair?", body: "I am a gym person and was very active before hernia. After laparoscopic mesh repair, when can I resume weight training safely?", category: "Recovery & Aftercare", name: "Karan M", city: "Delhi" },
  // KNEE
  { title: "How long does a knee replacement implant last?", body: "My mother needs total knee replacement. She is worried that the implant will need to be replaced again in 10-15 years. What is the realistic lifespan of modern implants?", category: "Knee Replacement", name: "Arun K", city: "Delhi" },
  { title: "Is robotic knee replacement worth the extra cost?", body: "My surgeon is offering both conventional and robotic knee replacement. Robotic costs Rs 80,000 more. Is it really worth it?", category: "Knee Replacement", name: "Meera T", city: "Gurugram" },
  { title: "How painful is knee replacement recovery? Realistic expectation?", body: "My 68-year-old mother is very anxious about pain after knee replacement. Can someone give a realistic account of the pain level day by day?", category: "Knee Replacement", name: "Raj S", city: "Bangalore" },
  // GENERAL
  { title: "Best hospital for hernia surgery in Pune under Rs 80,000?", body: "I need laparoscopic hernia repair in Pune. My budget is around Rs 80,000 including everything. Which hospitals provide good quality within this budget?", category: "General Surgery", name: "Amol P", city: "Pune" },
  { title: "Can cataract surgery be done if I have diabetes?", body: "My father has Type 2 diabetes with HbA1c of 8.2. His ophthalmologist says he needs cataract surgery. Is it safe with uncontrolled diabetes?", category: "Cataract & Eyes", name: "Kavya R", city: "Chennai" },
  { title: "What is RIRS kidney stone surgery? Better than PCNL?", body: "My doctor recommended RIRS for my 11mm kidney stone. My friend had PCNL for a similar stone. What is the difference and which is better?", category: "General Surgery", name: "Suresh N", city: "Kochi" },
  { title: "How much does gallbladder removal cost in Hyderabad?", body: "I have been told I need laparoscopic cholecystectomy for gallstones. What is the realistic all-inclusive cost in Hyderabad?", category: "General Surgery", name: "Priya M", city: "Hyderabad" },
  { title: "Varicocele surgery or embolisation — which is better?", body: "I have Grade 3 varicocele and low sperm count. My urologist gave two options — microsurgical varicocelectomy or embolisation. Which has better outcomes?", category: "Circumcision & Urology", name: "Anonymous", city: "Delhi" },
  { title: "How soon after appendix surgery can I eat normal food?", body: "My 19-year-old son had laparoscopic appendectomy yesterday. The doctor gave a vague diet plan. When can he eat normal food?", category: "Recovery & Aftercare", name: "Seema K", city: "Noida" },
  { title: "Is gynecomastia surgery permanent? Can it come back?", body: "I am 22 years old and have Grade 2 gynecomastia. If I have surgery now, will it come back? Is the result permanent?", category: "General Surgery", name: "Anonymous", city: "Delhi" },
  { title: "Sinusitis surgery (FESS) recovery — how many days off work?", body: "I have been advised FESS for chronic sinusitis. I have a desk job. How many days off work will I need?", category: "Recovery & Aftercare", name: "Vikram S", city: "Mumbai" },
  { title: "ACL surgery at 40 years old — is it worth it?", body: "I am 40 and tore my ACL playing cricket. My orthopaedic says I can either have surgery or do physiotherapy. At 40, is ACL surgery worth the recovery?", category: "Knee Replacement", name: "Ashok R", city: "Bangalore" },
  { title: "What is the cost of hydrocele surgery in Chennai?", body: "I have been diagnosed with a large hydrocele. What is the cost of laparoscopic hydrocele surgery in Chennai and how long is recovery?", category: "Circumcision & Urology", name: "Anonymous", city: "Chennai" },
  { title: "Is MTP covered by corporate health insurance in India?", body: "I have group health insurance through my company. If I get MTP done, will it be covered? Will my company HR find out?", category: "Insurance & Cost", name: "Anonymous", city: "Gurugram" },
  { title: "How to choose between two surgeons who give very different advice?", body: "I got second opinions from two surgeons for my hernia. One says I need surgery now, the other says watch and wait. How do I decide?", category: "General Surgery", name: "Anil M", city: "Delhi" },
  { title: "What are the signs of mesh infection after hernia surgery?", body: "My husband had laparoscopic hernia surgery 5 weeks ago. He still has some swelling and mild fever occasionally. Could this be mesh infection?", category: "Recovery & Aftercare", name: "Priya K", city: "Noida" },
  { title: "Can I claim piles surgery under PMJAY Ayushman Bharat?", body: "I have an Ayushman Bharat card. Can I use it for laser piles surgery? Which hospitals in Delhi accept it?", category: "Insurance & Cost", name: "Ramesh P", city: "Delhi" },
  { title: "Best age for cataract surgery — should I wait until vision is very bad?", body: "My ophthalmologist says I have early cataract. My vision is still manageable. Should I wait until it is worse or have surgery now?", category: "Cataract & Eyes", name: "Savita N", city: "Lucknow" },
  { title: "What foods to eat and avoid after knee replacement surgery?", body: "My mother had total knee replacement last week. The hospital gave very basic diet advice. What should she eat to speed up recovery and what should she avoid?", category: "Recovery & Aftercare", name: "Deepak S", city: "Delhi" },
]

async function seed() {
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  const db = client.db("mysurgery")
  const col = db.collection("community")

  let added = 0
  for (const q of questions) {
    const slug = q.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80) + "-" + Date.now() + Math.random().toString(36).slice(2, 6)
    const exists = await col.findOne({ title: q.title })
    if (!exists) {
      await col.insertOne({
        ...q,
        slug,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        answers: [],
        answerCount: 0,
        views: Math.floor(50 + Math.random() * 400),
      })
      added++
    }
  }
  console.log(`Added ${added} questions to community`)
  await client.close()
}

seed().catch(console.error)
