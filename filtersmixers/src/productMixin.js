export const productMixin = {
  data() {
    return {
      message: "Selamlar Salih Can Çakar | SCÇ",
      products: ["Monitör", "Kalem", "Kasa", "TV", "Araba", "Uçak"],
      searchText: "",
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filtered() {
      return this.products.filter((item) => {
        return item.toLowerCase().match(this.searchText.toLowerCase());
      });
    },
  },
};
