<script setup>
import {reactive} from "vue";

const state = reactive({
  contactOptions: [
    {href: "https://www.linkedin.com/in/jzapatab/", target: "_blank", icon: "mdi-linkedin"},
    {href: "https://github.com/julianandreszb", target: "_blank", icon: "mdi-github"},
    {href: "mailto:julianandreszb@gmail.com", target: "_blank", icon: "mdi-at"},
  ]
});
</script>

<template>
  <v-container>
    <v-card class="mb-8 gradient-contact" theme="dark">
      <v-card-title>
        <span class="text-h6 font-weight-bold text-uppercase">Contact</span>
      </v-card-title>

      <v-card-text class="mt-4 contact-description-text text-medium-emphasis">
        Please feel free to send me an email. I'll try to reply to you as soon as possible.
      </v-card-text>

      <v-card-actions>
        <v-list-item class="w-100">
          <div class="d-flex justify-end">
            <v-btn v-for="contactOption in state.contactOptions"
                   :href="contactOption.href"
                   :target="contactOption.target"
                   :icon="contactOption.icon"
            >
            </v-btn>
          </div>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<style scoped>
.gradient-contact {
  background: #2C3E50;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.contact-description-text {
  font-size: 1.25rem;
}
</style>