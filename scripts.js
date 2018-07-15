const tabs = document.querySelectorAll('.tab');
const tabContainer = document.querySelector('.tab-content')
console.log(tabContainer)

const tab_1 = `<div class="image-container"></div>
        <div class="text-container">
          <h1 class="tab-header">Bob Ross Ipsum</h1>
          <div class="tab-break"></div>
          <p class="p-1">
             You can do anything your heart can imagine. Just pretend you are a whisper floating across a mountain. In your imagination
            you can go anywhere you want. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves.
            Maybe there's a happy little Evergreen that lives here.
          </p>
          <p class="p-2">
             Be brave. We don't make mistakes we just have happy little accidents. Let all these things just sort of happen. See how
            easy it is to create a little tree right in your world.
          </p>
        </div>
      </div>`

const tab_2 = `<div class="image-container"></div>
        <div class="text-container">
          <h1 class="tab-header">Hipster Ipsum</h1>
          <div class="tab-break"></div>
          <p class="p-1">
             Dreamcatcher plaid tousled biodiesel craft beer. Trust fund you probably haven't heard of them tousled hell of blog aesthetic,
            salvia portland tumeric semiotics green juice. +1 chia poutine, swag locavore jean shorts gluten-free fashion axe roof party
            cliche. Retro cray 8-bit butcher 90's hella poutine photo booth aesthetic.
          </p>
          <p class="p-2">
             Bitters tilde messenger bag put a bird on it celiac health goth. Polaroid yr chillwave lo-fi thundercats mlkshk austin jianbing
            woke tattooed swag scenester actually jean shorts before they sold out.
          </p>
        </div>
      </div>`

const tab_3 = `<div class="image-container"></div>
        <div class="text-container">
          <h1 class="tab-header">Pirate Ipsum</h1>
          <div class="tab-break"></div>
          <p class="p-1">
             Gun careen Privateer haul wind crimp Sail ho red ensign fire in the hole Brethren of the Coast clipper. Fathom jury mast
            mizzen boatswain Sail ho rutters salmagundi run a shot across the bow gibbet tackle. Main sheet jack interloper Jack Ketch
            hulk flogging clap of thunder Jack Tar furl red ensign.
          </p>
          <p class="p-2">
             Rigging dance the hempen jig trysail to go on account booty execution dock belaying pin Chain Shot schooner aye. Jolly boat
            man-of-war take a caulk no prey, no pay Sink me clipper grapple Pieces of Eight lugsail warp.
          </p>
        </div>
      </div>`

const tab_4 = `<div class="image-container"></div>
        <div class="text-container">
          <h1 class="tab-header">Zombie Ipsum</h1>
          <div class="tab-break"></div>
          <p class="p-1">
             Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus
            brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
          </p>
          <p class="p-2">
             Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
            Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
          </p>
        </div>
      </div>`

const tabContent = {
  tab_1,
  tab_2,
  tab_3,
  tab_4
}

serveHTML('tab_1')

tabs.forEach(tab => {
  tab.addEventListener('click', toggleClass)
})

function toggleClass() {
  if (this.classList.contains('selected')) {
    return;
  } else {
    tabs.forEach(tab => {
      tab.classList.remove('selected')
    })
    this.classList.add('selected')
  }
  serveHTML(this.classList[1])
}

function serveHTML(tabName) {
  const match = Object.keys(tabContent).find(tab => tab === tabName)
  tabContainer.innerHTML = tabContent[match];
}