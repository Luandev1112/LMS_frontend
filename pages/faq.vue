<template>
  <div>
    <main>
      <web-header :title="title" :beschrijving="beschrijving"></web-header>
      <div
        class="relative m-4 bg-gray-50 lg:py-16 rounded-2xl lg:overflow-hidden"
      >
        <div
          class="px-4 py-12 mx-auto max-w-7xl sm:py-16 lg:py-0 sm:px-6 lg:px-8"
        >
          <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <accordion>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Hoe kan ik beginnen met bijlesgeven/aanbieden?</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Met een premium account is het mogelijk om je profiel
                    openbaar te stellen voor iedereen die geïnteresseerd is in
                    de door jou aangeboden bijles. Voor een uitgebreid
                    stappenplan hoe dit proces werkt zie “hoe werkt
                    bijlesnodig.nl”.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Wat is het voordeel van lesgeven via bijlesnodig.nl?</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Het voordeel van lesgeven via bijlesnodig.nl is dat je zelf
                    alles in de hand hebt. Je bepaalt zelf de hoogte van je
                    uurtarief, de vakken waar je les in geeft en de locatie waar
                    de bijles plaatsvindt.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>
                    Wie bepaalt het aantal uren en het rooster voor lesgeven?
                  </h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Dit wordt onderling afgesproken door de bijlesgever en
                    degene die de bijles nodig heeft. Via het berichtencentrum
                    kan er contact worden gemaakt en kunnen de mogelijke
                    afspraken worden besproken.
                  </span>
                </template>
              </accordion-item>

              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>
                    Moet je commissie aan bijlesnodig.nl betalen per bijles?
                  </h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Nee er hoeft in geen enkel geval commissie aan
                    bijlesnodig.nl betaald te worden. Je sluit een abonnement af
                    voor een premium account om over de functie te beschikken om
                    contact met de bijlesgever te kunnen leggen, vervolgens kun
                    je alles individueel regelen zonder dat wij hier als
                    tussenpersoon fungeren en dus commissie vragen.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Is de kwaliteit van de bijlesgevers te controleren?</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Het is mogelijk om een inzicht te krijgen in de kwaliteit
                    van bijlesgevers door de reviews en het aantal sterren te
                    bekijken.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>
                    Brengt registreren bij bijlesnodig.nl verplichtingen met
                    zich mee?
                  </h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Nee dit brengt geen verdere verplichtingen met zich mee.
                    Bij het registreren op bijlesnodig.nl ben je niet verplicht
                    tot bijlesgeven, de intentie van het platform is dat jij ten
                    alle tijden zelf bepaald wie jij lesgeeft of van wie jij
                    graag bijles zou willen krijgen.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Wanneer kan ik berichten sturen naar bijlesgevers?</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Zodra er een premium abonnement is afgesloten beschik je
                    over de functie om berichten te sturen naar mogelijke
                    bijlesgevers.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Kan ik mij ook afmelden bij bijlesnodig.nl</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Het abonnement op bijlesnodig.nl heeft de mogelijkheid om
                    je ten alle tijden af te melden.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Wat kost bijlesnodig.nl?</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >De kosten voor een premium account op bijlesnodig.nl
                    verschillen per looptijd van het abonnement, dit is
                    eenvoudig terug te vinden bij het kopje “prijzen”.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Wat betaal ik de bijlesgevers per uur?</h3>
                </template>
                <template slot="accordion-content">
                  <span>
                    Dit kun je zelf bepalen, vraag een prijs waar jij je goed
                    bij voelt en waar mogelijke bijlesadressen op af komen.
                  </span>
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3>Hoe kan ik het best online les geven?</h3>
                </template>
                <template slot="accordion-content">
                  <span
                    >Het online lesgeven heeft verschillende hulpmiddelen
                    mogelijk.
                    <br />
                    <br />
                    De meest gangbare zijn:
                    <br />
                    - Skype
                    <br />
                    - Whatsapp
                    <br />
                    - GoogleMeet
                    <br />
                    - Facetime
                    <br />
                    - Zoom
                    <br />
                    <br />

                    Het is mogelijk om met of zonder de camera aan bijles te
                    geven via eerder genoemde opties, ook is de mogelijkheid er
                    om elkaars scherm te delen wat kan helpen bij de bijles.
                  </span>
                </template>
              </accordion-item>
            </accordion>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Accordion from '~/components/UI/accordion.vue'
import AccordionItem from '~/components/UI/accordion-item.vue'
import webHeader from '~/components/webLayout/webHeader.vue'

export default {
  components: { webHeader, AccordionItem, Accordion },
  data() {
    return {
      title: 'Veelgestelde vragen',
      beschrijving:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempo.',
    }
  },
  methods: {},
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
}
</script>

<style></style>
