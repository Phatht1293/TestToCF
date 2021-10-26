class LinkShortener {
  $bgContainer = document.createElement("div");
  $txtHeader = document.createElement("h1");

  $container = document.createElement("div");
  $txtTitle = document.createElement("h2");

  $form = document.createElement("form");

  $URLcontainer=document.createElement("div")
  $labelURL = document.createElement("label");
  $inputURL = document.createElement("input");
  $btnRunURL = document.createElement("button");

  $DomainContainer=document.createElement("div")
  $labelDomain = document.createElement("label");
  $btnDM1 = document.createElement("button");
  $btnDM2 = document.createElement("button");
  $btnDM3 = document.createElement("button");

  $txtPage = document.createElement("p");

  $txtFooter = document.createElement("h5");

  constructor() {

    this.$txtHeader.innerHTML="The privacy-friendly URL Shortener"
    this.$txtTitle.innerHTML="Link Shortener"
    this.$labelURL.innerHTML="Enter a Link:"
    this.$inputURL.placeholder="example.com"
    this.$btnRunURL.innerHTML="→"
    this.$labelDomain.innerHTML="Short domain:"
    this.$btnDM1.innerHTML="shrtco.de"
    this.$btnDM2.innerHTML="9qr.de"
    this.$btnDM3.innerHTML="shiny.link"
    this.$txtPage.innerHTML="With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link."
    this.$txtFooter.innerHTML="By using shrtcode you agree to our Terms of Service."

    this.$bgContainer.appendChild(this.$txtHeader);
    this.$bgContainer.appendChild(this.$container);
    this.$bgContainer.appendChild(this.$txtFooter);
    this.$bgContainer.classList.add("bg-container")

    this.$container.appendChild(this.$txtTitle);
    this.$container.appendChild(this.$form);
    this.$container.appendChild(this.$txtPage)
    this.$container.classList.add("container")

    this.$form.appendChild(this.$URLcontainer)
    this.$form.appendChild(this.$DomainContainer)
    this.$form.addEventListener("submit",this.handleSubmit)

    this.$URLcontainer.appendChild(this.$labelURL)
    this.$URLcontainer.appendChild(this.$inputURL)
    this.$URLcontainer.appendChild(this.$btnRunURL)
    this.$btnRunURL.classList.add("btnURL")

    this.$DomainContainer.appendChild(this.$labelDomain)
    this.$DomainContainer.appendChild(this.$btnDM1)
    this.$DomainContainer.appendChild(this.$btnDM2)
    this.$DomainContainer.appendChild(this.$btnDM3)
    this.$btnDM1.classList.add("btnDomain")
    this.$btnDM2.classList.add("btnDomain")
    this.$btnDM3.classList.add("btnDomain")

  }

  handleSubmit=(event)=>{
    event.preventDefault()
  }
}

export { LinkShortener };
