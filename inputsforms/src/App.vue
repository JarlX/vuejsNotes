<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Kullanıcı Adı</label>
                    <input
                      type="text"
                      id="username"
                      class="form-control"
                      :value="userData.username"
                      @input="userData.username = $event.target.value"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      v-model.lazy.number.trim="userData.password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input
                      type="number"
                      id="age"
                      class="form-control"
                      v-model.number.trim="userData.age"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br />
                  <textarea
                    v-model.lazy="userData.text"
                    id="message"
                    rows="3"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input
                        type="checkbox"
                        value="yazilim"
                        v-model="userData.interests"
                      />
                      Yazılım
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="donanim"
                        v-model="userData.interests"
                      />
                      Donanım
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input
                      type="radio"
                      value="erkek"
                      v-model="userData.gender"
                    />
                    Erkek
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="kadin"
                      v-model="userData.gender"
                    />
                    Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select v-model="userData.selectedCity" class="form-control">
                    <option
                      :selected="city == 'Ankara'"
                      v-for="city in userData.cities"
                      >{{ city }}</option
                    >
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <appSwitch v-model="switched"></appSwitch>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-12">
                  <button @click.prevent="submit" class="btn btn-primary">
                    Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmitted">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Form Verileri</h4>
          </div>
          <div class="panel-body">
            <p>Kullanıcı Adı: {{ userData.username }}</p>
            <p>Şifre: {{ userData.password }}</p>
            <p>Yaş:{{ userData.age }}</p>
            <p>Açıklama: {{ userData.text }}</p>
            <p><strong>İlgi Alanları</strong></p>
            <ul>
              <li v-for="interest in userData.interests">{{ interest }}</li>
            </ul>
            <p>Cinsiyet: {{ userData.gender }}</p>
            <p>Şehir: {{ userData.selectedCity }}</p>
            <p>Toggle:{{ switched }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";

export default {
  data() {
    return {
      userData: {
        username: "",
        password: "",
        age: null,
        text: "",
        gender: "",
        interests: [],
        cities: ["İstanbul", "Ankara", "İzmir"],
        selectedCity: "",
      },
      switched: true,
      isSubmitted: false,
    };
  },
  components: {
    appSwitch: Switch,
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    },
  },
};
</script>

<style></style>
