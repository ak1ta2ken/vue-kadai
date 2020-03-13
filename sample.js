new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: '渡邉大佑',
    cource: 'Webエンジニアコース',
    acceptancePeriod: '2020年01月期',
    defaultLastId: 9,
    students: [
      { id: 1, name: '葉山哲弘', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 2, name: '松橋龍也', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 3, name: '小高公久', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 4, name: '上口慧', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 5, name: '三原良介', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 6, name: '青木一泰', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 7, name: '磯谷和樹', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 8, name: '松浦峻介', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
      { id: 9, name: '松原弘樹', cource: 'Webエンジニアコース', acceptancePeriod: '2020年01月期' },
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
      this.students.push({
        id: this.defaultLastId += 1,
        name: this.name,
        cource: this.cource,
        acceptancePeriod: this.acceptancePeriod
      })
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
      this.name = null
      this.cource = null
      this.acceptancePeriod = null
    }
  }
})
