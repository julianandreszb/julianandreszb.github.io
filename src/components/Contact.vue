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

      <v-card-text class="mt-4 contact-description-text">
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
  background-color: #FF3CAC;
  background-image: linear-gradient(225deg, #FF3CAC 0%, #7207d2 50%, #0099ff 100%);
}

.contact-description-text {
  font-size: 1.25rem;
}
</style>