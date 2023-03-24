new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
    attack_multiple: 10,
    special_attack_multiple: 30,
    heal_up_multiple: 20,
    monster_attack_multiple: 15,
    log_text: {
      attack: "OYUNCU SALDIRISI : ",
      special_attack: "ULTİ SALDIRISI : ",
      heal_up: "OYUNCU SAĞLIK : ",
      give_up: "OYUNCU PES ETTİ!",
      monster_attack: "CANAVAR SALDIRISI : ",
    },
    logs: [],
  },
  methods: {
    start_game() {
      this.game_is_on = true;
    },
    attack() {
      var point = Math.ceil(Math.random() * this.attack_multiple);
      this.monster_heal -= point;
      this.add_to_log({
        turn: "P.A",
        text: this.log_text.attack + point,
      });
      this.monster_attack();
    },
    special_attack() {
      var point = Math.ceil(Math.random() * this.special_attack_multiple);
      this.monster_heal -= point;
      this.add_to_log({
        turn: "P.U",
        text: this.log_text.special_attack + point,
      });
      this.monster_attack();
    },
    heal_up() {
      var point = Math.ceil(Math.random() * this.heal_up_multiple);
      this.player_heal += point;
      this.add_to_log({
        turn: "P.H",
        text: this.log_text.heal_up + point,
      });
      this.monster_attack();
    },
    give_up() {
      this.player_heal = 0;
      this.add_to_log({
        turn: "P",
        text: this.log_text.give_up,
      });
    },
    monster_attack() {
      var point = Math.ceil(Math.random() * this.monster_attack_multiple);
      this.add_to_log({
        turn: "M.A",
        text: this.log_text.monster_attack + point,
      });
      this.player_heal -= point;
    },
    add_to_log(log) {
      this.logs.push(log);
    },
  },
  watch: {
    player_heal(val) {
      if (val <= 0) {
        this.player_heal = 0;
        if (confirm("Oyunu Kaybettin! Tekrar Denemek İster Misin?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      } else if (val >= 100) {
        this.player_heal = 100;
      }
    },
    monster_heal(val) {
      if (val < 0) {
        this.monster_heal = 0;
        if (confirm("Oyunu Kazandın! Tekrar Oynamak İster Misin?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      } else if (val >= 100) {
        this.monster_heal = 100;
      }
    },
  },
  computed: {
    players_progress() {
      return { width: this.player_heal + "%" };
    },
    monster_progress() {
      return { width: this.monster_heal + "%" };
    },
  },
});
