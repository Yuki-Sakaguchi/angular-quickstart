export interface AppInfo {
  title: string,
  author: string,
  created: Date
}

export const MY_APP_INFO : AppInfo = {
  title: 'Angularサンプル',
  author: 'YAMADA, Yoshihiro',
  created: new Date(2017, 2, 14)
};
