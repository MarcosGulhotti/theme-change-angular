export class HellowWorldService {
  getTexts() {
    return ['text1', 'text2', 'text3', 'text4', 'text5'];
  }

  getStyle(company: string) {
    let apiInfo = [
      '{"company": "conectadoc", "style": {"color": "#fff", "background-color": "#1616ba"}}',
      '{"company": "conectadocdark", "style": {"color": "#fff", "background-color": "#000"}}',
    ];

    const defaultStyle = { color: '#1b1b', 'background-color': '#aaaaaa' };

    const styles = [];

    for (let style of apiInfo) {
      styles.push(JSON.parse(style));
    }

    const companyStyle = styles.find((elm) => elm.company === company);

    if (companyStyle === undefined) {
      return defaultStyle;
    }

    return companyStyle.style;
  }
}
