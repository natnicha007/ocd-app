import Link from 'next/link'
import React from 'react'

export default function Portfolio1() {
  return (
    <div>
        <>
  {/* full Title */}
  <div className="full-title">
    <div className="container">
      {/* Page Heading/Breadcrumbs */}
      <h1 className="mt-4 mb-3">
        การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
        {/* <small>Subheading</small> */}
      </h1>
    </div>
  </div>
  {/* Page Content */}
  <div className="container">
    <div className="breadcrumb-main">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active">Portfolio 1</li>
      </ol>
    </div>
    <div className="project-inner">
      {/* Project One */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-01.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การกำเนินการเปลี่ยนแปลงภาครัฐในยุคดิจิทัล</h3>
          <p>
          ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
          </p>
          <p>
          "ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital Government) นั่นเอง”
          </p>
          <a className="btn btn-primary" 
          href="images/change/change_processing-1-66.pdf" 
          target='_blank'
          rel='noopener noreferrer'>

            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    <div className="project-inner">
      {/* Project Two */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-02.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผล</h3>
          <p>
          1. การสร้างความพร้อมในการเปลี่ยนแปลงของสมาชิกในองค์การ (Creating Readiness for Change)-ต้องทำให้สมาชิกขององค์การเห็นความจำเป็นของการเปลี่ยนแปลง-ช่วยให้บุคลากรเหล่านี้ลดการต่อต้านการเปลี่ยนแปลง
          </p>
          <p>
          2. การสร้างวิสัยทัศน์ (Creating a Vision)-แสดงถึงความมุ่งหมายและความจำเป็นของการเปลี่ยนแปลง-มุ่งหวังให้เกิดการเปลี่ยนแปลงขึ้น-ผู้บริหารจำเป็นต้องกำหนดวิสัยทัศน์ที่มีความชัดเจน เป็นต้น
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-67-71.pdf "target='_blank'rel='noopener noreferrer'>
            
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    <div className="project-inner">
      {/* Project Three */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-03.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การดำเนินการเปลี่ยนแปลง เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง และองค์กรอัจฉริยะ
</h3>
          <p>
          1. ความเป็นองค์กรดิจิทัล: ERP System (Enterprise Resource Planning) ระบบบริหารจัดการทรัพยากรภายในองค์กร และความเป็นองค์กรเสมือนจริง: Metaverse จักรวาลนฤมิตก้าวสู่ความเป็นรัฐบาลดิจิทัล 
          </p>
          <p>
          ความเป็นองค์กรอัจฉริยะ: AI จำแนกสายพันธุ์ดอกไอริส (ประยุกต์ใช้งานเพื่อการขับเคลื่อนโยบายสาธารณะด้านการท่องเที่ยว).
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-72-75.pdf" target='_blank' rel='noopener noreferrer'>
            ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Four */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง 
</h3>
          <p>
          1. ความเป็นเจ้าของ (Ownership)2. ข้อมูลที่เป็นรูปธรรม (Hard Data)3. ความเที่ยงตรง (Integrity) การเปลี่ยนแปลงต้องยึดมั่นหลักการ โดยปราศจากการผ่อนปรนใดๆ
          </p>
          <p>
          4. ความหลากหลาย (Diversity) คือการตอบสนองความต้องการของกลุ่มต่างๆ ที่แตกต่างกัน (Heterogeneity)5. การกระจายอำนาจ (Decentralization)6. การเรียนรู้ (Learning)
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-76-78.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Five */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การสร้างความพร้อมในการเปลี่ยนแปลง 
</h3>
          <p>
          ก่อนวางแผนการเปลี่ยนแปลงต้องมีการประเมินปัจจัย 8 ประการ 
          </p>
          <p>
          1. ค่านิยมและวิสัยทัศน์ (Values and Vision)2. ประวัติการเปลี่ยนแปลง (History of Change)3. ความร่วมมือและความไว้วางใจ (Cooperation and Trust) 4. วัฒนธรรม (Culture)5. การปรับตัว (Resilience)6. การให้รางวัล (Rewards) 7. ความเคารพในตนเอง (Respect and Face)8. สถานะเดิม 
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-79-82.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Six */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง  
</h3>
          <p>
          ค่านิยมและวิสัยทัศน์ (คนในองค์การยึดมั่นในค่านิยมและวิสัยทัศน์เดียวกันใช่หรือไม่)
          </p>
          <p>
          ประวัติการเปลี่ยนแปลง (องค์การมีประวัติแสดงถึงความสำเร็จในการจัดการการเปลี่ยนแปลงใช่หรือไม่)
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-83-85.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Seven */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change) 
</h3>
          <p>
            <Link href={"https://policywatch.thaipbs.or.th/article/government-106"} target='_blank' rel='noopener noreferrer'>
           การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
          </Link>
          </p>
          <p>
          การต่อต้านการเปลี่ยนแปลง นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม 
          เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา 
          เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า มีบางส่วนเท่านั้นที่ยอมรับได้ 
          และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด
          </p>
          <p>
          การต่อต้านการเปลี่ยนแปลง คือ การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน 
          เพื่อรองรับการเติบโต หรือเพื่อความอยู่รอดขององค์กร แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว 
          ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-86-89.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Gight*/}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to Change)
</h3>
          <p>
            <Link href={"https://primeast.com/us/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace/"}target='_blank' rel='noopener noreferrer'>
            7 กลยุทธ์ในการเอาชนะการต่อต้านการเปลี่ยนแปลงในสถานที่ทำงาน
          </Link></p>
          <p>
          ในโลกทุกวันนี้ การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยู่ ในธุรกิจก็เช่นเดียวกัน 
          สำหรับพนักงาน การจัดการการเปลี่ยนแปลงอาจเป็นเรื่องยากและน่าหงุดหงิด 
          เมื่อมุ่งมั่นสู่การเปลี่ยนแปลงที่ประสบความสำเร็จ เราต้องพิจารณาถึงการรับรู้ที่แตกต่างกันของผู้ที่ริเริ่มการเปลี่ยนแปลง 
          ผู้ดำเนินการเปลี่ยนแปลง และผู้ได้รับผลกระทบจากการเปลี่ยนแปลงนั้น
ในบทความนี้ 
</p>
          <p>
          คุณจะได้เรียนรู้เทคนิคในการจัดการกับแรงต้านทานต่อการเปลี่ยนแปลงอย่างมีประสิทธิภาพมากขึ้นเราจะสำรวจประเภทของการเปลี่ยนแปลง พูดคุยถึงสิ่งที่ทำให้ผู้คนตอบสนองต่อความพยายามในการเปลี่ยนแปลง และอธิบายแนวทางเชิงกลยุทธ์และเชิงยุทธวิธีในการเอาชนะแรงต้านทานต่อการเปลี่ยนแปลงในสถานที่ทำงาน
          </p>
         
          <a className="btn btn-primary" href="images/change/change_processing-90-92.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Nine */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to Change)  
</h3>
          <p>
          <Link href={"https://lsaglobal.com/essential-components-of-a-successful-vision-for-change/"}target='_blank' rel='noopener noreferrer'>
          องค์ประกอบที่สำคัญของวิสัยทัศน์แห่งการเปลี่ยนแปลงที่ประสบความสำเร็จ
          </Link></p>
          <p>
          วิสัยทัศน์ร่วมเพื่อการเปลี่ยนแปลงคือสถานะอนาคตที่ดีขึ้นที่ผู้มีส่วนได้ส่วนเสียหลักทุกคนต่างเห็นพ้องต้องกัน 
          วิสัยทัศน์ร่วมเพื่อการเปลี่ยนแปลงจะตอบคำถาม เช่น
การเปลี่ยนแปลงในอนาคตจะมีลักษณะและความรู้สึกอย่างไร?
เหตุใดการเปลี่ยนแปลงที่ต้องการจึงดีกว่าสิ่งที่เป็นอยู่ตอนนี้?
          </p>
          <p>
          การเปลี่ยนแปลงที่ประสบผลสำเร็จนั้นต้องอาศัยมุมมองร่วมกันเกี่ยวกับความเป็นจริงในปัจจุบัน 
          ความเต็มใจและความสามารถในการแบ่งปันข้อมูลเชิงกลยุทธ์ ความปรารถนาที่จะรับฟังและดำเนินการตามคำติชมของผู้มีส่วนได้ส่วนเสีย 
          และวิสัยทัศน์ร่วมกันเกี่ยวกับอนาคตที่ชัดเจน น่าดึงดูด สร้างแรงบันดาลใจ น่าเชื่อถือ มีความเกี่ยวข้อง 
          น่าจดจำ ขับเคลื่อนด้วยจุดประสงค์ ท้าทาย และเป็นไปได้
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-93-98.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Ten */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision) 
</h3>
          <p>
            <Link href={"https://www.popticles.com/branding/how-to-write-effective-vision-statement/"}target='_blank' rel='noopener noreferrer'>
            ขั้นตอนการสร้าง Vision Statement
          </Link></p>
          <p>
            Vision Statement หรือคำกล่าวถึงวิสัยทัศน์ของแบรนด์หรือองค์กร 
          ซึ่งมันคือแนวทางที่แสดงออกให้เห็นถึงการที่จะไปสู่เป้าหมายของแบรนด์หรือการทำธุรกิจ 
          ผ่านคำพูดหรือข้อความและมีการสื่อสารไปยังผู้มีส่วนได้ส่วนเสียทุกๆฝ่าย
          ไม่ว่าจะเป็นพนักงาน คู่ค้าทางธุรกิจ ลูกค้า ผู้ถือหุ้น สื่อมวลชน และคนที่เกี่ยวข้อง 
          </p>
<p>
  ซึ่ง Vision Statement
          นั้นเป็นการอธิบายถึงผลลัพธ์ในระยะยาวที่แบรนด์นั้นวางเป้าหมายเอาไว้ 
          นับเป็นระดับที่เรียกว่าสูงสุดขององค์กรเลยก็ว่าได้ครับ 
          โดยถ้าไม่มีการกำหนดวิสัยทัศน์ที่ชัดเจนแบรนด์และการทำธุรกิจก็อาจจะกลาย
          เป็นเหมือนกับเรือที่ไม่มีหางเสือไม่รู้ว่าปลายทางที่เราทำกันอยู่มันคืออะไร 
          ซึ่งมันก็อาจจะทำให้ทั้งองค์กรนั้นล้มลงอย่างไม่เป็นท่าเลยก็ได้
</p>
          <a className="btn btn-primary" href="images/change/change_processing-99-102.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Eleven */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to Change)  
</h3>
          <p>
          <Link href={"https://managementisajourney.com/leading-change-step-3-develop-a-change-vision-and-strategy/?srsltid=AfmBOoqs1XVMIoYRWE9mNIWDFYfo0vWW1H0ONUoGnzsb8QpEU0vgMk6l"}target='_blank' rel='noopener noreferrer'>
          การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง 
          </Link></p>
          <p>
          ความรับผิดชอบที่สำคัญประการหนึ่งของความเป็นผู้นำคือการกำหนดทิศทางขององค์กรในอนาคต
ด้วยเหตุนี้ ผู้นำระดับสูงจึงต้องรับผิดชอบบางส่วนในการสร้างคำอธิบายระดับสูงเกี่ยวกับวิสัยทัศน์และกลยุทธ์การเปลี่ยนแปลง 
การมอบความรับผิดชอบทั้งหมดสำหรับขั้นตอนนี้ให้กับกลุ่มผู้กำหนดแนวทางนั้นไม่ใช่สิ่งที่พึงปรารถนา
          </p>
          <p>
          สิ่งสำคัญในการจัดการการเปลี่ยนแปลงคือ วิสัยทัศน์เพื่อการเปลี่ยนแปลงที่ประสบความสำเร็จ
การเปลี่ยนแปลงองค์กรที่ประสบความสำเร็จ ไม่ว่าจะเล็กหรือใหญ่ จะต้องเริ่มต้นจากวิสัยทัศน์ที่ชัดเจนและน่าสนใจเกี่ยวกับสถานะที่ต้องการ เพื่อจูงใจและจัดแนวผู้ที่ได้รับผลกระทบจากวิธีการใหม่ที่ต้องการ 
ไม่ว่าการเปลี่ยนแปลงใหม่จะน่าตื่นเต้นเพียงใด
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-93-98.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      
    </div>
    <hr />
    {/* Project Twelve */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing  Stakeholders)  
</h3>
          <p>
            <Link href={"https://medium.com/@glenn_6066/how-to-influence-stakeholders-as-the-ceo-420128852e30"} target='_blank' rel='noopener noreferrer'>
          การทำให้ผู้มีส่วนได้ส่วนเสียรู้สึกถึงความจำเป็นในการเปลี่ยนแปลง
          </Link></p>
          <p>
          คุณมีผู้มีส่วนได้ส่วนเสียจำนวนมาก และคุณมีหน้าที่รับผิดชอบในการจัดการความสัมพันธ์กับผู้มีส่วนได้ส่วนเสียเหล่านี้
          ในโพสต์บล็อกนี้ ฉันจะพูดถึงวิธีที่ดีที่สุดในการจัดการความสัมพันธ์กับผู้มีส่วนได้ส่วนเสียของคุณ 
          เพื่อสร้างอิทธิพลต่อพวกเขาเพื่อประโยชน์ของคุณและบริษัทของคุณ
          </p>
          <p>
          การโน้มน้าวใจอย่างมีประสิทธิผลถือเป็นทักษะการจัดการที่สำคัญ โดยเฉพาะอย่างยิ่งในการทำให้มั่นใจว่า
          โครงการริเริ่มเชิงกลยุทธ์ที่สำคัญจะประสบความสำเร็จ คุณต้องโน้มน้าวผู้มีส่วนได้ส่วนเสียให้สนับสนุนวิสัยทัศน์และเป้าหมายของคุณ 
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-107-110.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Thirteen */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management Structures) 
</h3>
          <p>
            <Link href={"https://whatfix.com/blog/change-advisory-board/"}target='_blank' rel='noopener noreferrer'>
          คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงคืออะไร แนวทางปฏิบัติที่ดีที่สุดและประโยชน์
          </Link></p>
          <p>
          ในองค์กรของคุณ บทบาทนี้ได้รับการปฏิบัติโดยคณะกรรมการที่ปรึกษาการเปลี่ยนแปลง
          เช่นเดียวกับผู้ควบคุมวง CAB ทำหน้าที่ควบคุมการเปลี่ยนแปลงภายในองค์กรของคุณ เพื่อให้แน่ใจว่า โครงการ จัดการการเปลี่ยนแปลง
          ทุกโครงการสอดคล้องกับเป้าหมายเชิงกลยุทธ์ของคุณ 
          </p>
          <p>
          การบริหารการเปลี่ยนแปลง คือ วิธีการบริหารจัดการรูปแบบหนึ่งซึ่งนำไปสู่การปฏิรูปกลยุทธ์การบริหารจัดการองค์กร 
          รวมถึงการวางแผน และระบบงานต่างๆ ขององค์กรที่เชื่อมโยงกับการเปลี่ยนแปลงทั้งหมด
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-111-114.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    {/* Project Fourteen */}
    <div className="project-inner">
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="images/portfolio-big-04.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-5">
          <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum) และ ข้อควรหลีกเลี่ยงในการดำเนินการเปลี่ยนแปลง 
</h3>
          <p>
            <Link href={"https://www.prosci.com/blog/why-change-management-fails"} target='_blank' rel='noopener noreferrer'>
          6 เหตุผลที่การบริหารการเปลี่ยนแปลงล้มเหลวและวิธีหลีกเลี่ยง
          </Link> </p>
          <p>
          เราได้ระบุถึงข้อผิดพลาดทั่วไป 6 ประการเมื่อพยายามดำเนินการเปลี่ยนแปลง 
          อ่านต่อไปเพื่อเรียนรู้วิธีหลีกเลี่ยงหรือเอาชนะข้อผิดพลาดเหล่านี้ 
          และดำเนินการเปลี่ยนแปลงให้ประสบความสำเร็จ 
          </p>
          <p>
            การเปลี่ยนแปลงทำให้เกิดค่าใช้จ่ายอย่างหลีกเลี่ยงไม่ได้
            ,การพัฒนาสมรรถนะ และทักษะจำเป็นต่อการเปลี่ยนแปลง
            ,การส่งเสสริมให้พนักงานแสดงพฤติกรรมใหม่ เป็นต้น
          </p>
          <a className="btn btn-primary" href="images/change/change_processing-115-119.pdf" target='_blank' rel='noopener noreferrer'>
          ศึกษารายละเอียดเพิ่มเติม
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
      {/* /.row */}
    </div>
    <hr />
    <div className="pagination_bar">
      {/* Pagination */}
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* /.container */}
</>

    </div>
  )
}
