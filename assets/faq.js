/*start of FAQs*/ 

const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{

  faq.classList.toggle("active");
})
})

/*end of FAQs*/