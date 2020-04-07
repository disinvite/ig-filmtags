<template>
  <div>
    <b-form-group label="Camera" label-for="my-list-id2">
      <b-form-select id="my-list-id2" v-model="form.camera" v-bind:options="cameras"></b-form-select>
    </b-form-group>

    <b-form-group label="Film" label-for="my-list-id">
      <b-form-select id="my-list-id" v-model="form.film" v-bind:options="films"></b-form-select>
    </b-form-group>

    <b-form-group label="Comment" label-for="my-list-id3" v-if="!bigcomment">
      <b-form-input id="my-list-id3" v-model="form.comment" placeholder="type your comment"></b-form-input>
    </b-form-group>

    <b-form-group label="Comment" label-for="my-list-id3" v-if="bigcomment">
      <b-form-textarea id="my-list-id3" v-model="form.comment" placeholder="type your comment"></b-form-textarea>
    </b-form-group>

    <b-form-group class="inline">
      <!--<b-form-checkbox v-model="bigcomment">Long comment</b-form-checkbox>-->
      <b-form-checkbox v-model="form.thirtyfive">#35mm tag</b-form-checkbox>
    </b-form-group>

    <b-card style="text-align: left;">
      <pre v-text="finaltext" style="word-wrap: break-word; white-space: pre-wrap;"></pre>
      <b-button type="button" variant="primary" v-clipboard:copy="finaltext">Copy</b-button>
    </b-card>
  </div>
</template>

<script>
import { tagger } from '../tagger.js';

export default {
  name: 'TagForm',
  props: {
    msg: String
  },
  watch: {
    form: {
      deep: true,
      handler: function() {
        this.updateText();
      }
    }
  },
  methods: {
    updateText: function() {
      this.finaltext = tagger(this.form);
    }
  },
  data() {
    return {
      bigcomment: false,
      finaltext: '',
      form: {
        thirtyfive: true,
        film: null,
        camera: null,
        comment: ''
      },
      films: [
        { text: "— select —", value: null },
        { text: "Kodak Gold 200", value: "gold200" },
        { text: "Kodak Portra 400", value: "portra400" },
        { text: "Fuji C200", value: "c200" },
        { text: "Kodak Tri-X 400", value: "trix" },
        { text: "Ilford HP5", value: "hp5" },
      ],
      cameras: [
        { text: "— select —", value: null },
        { text: "Canonet QL17", value: "canonet" },
        { text: "Pentax K1000", value: "pentax" },
        { text: "Lomo LC-A", value: "lca" },
        { text: "Minolta Hi-Matic AF2", value: "af2" }
      ]
    }
  }
}
</script>

<style scoped>
</style>
