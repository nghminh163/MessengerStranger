export default (text, buttons) => ({
  attachment: {
    type: "template",
    payload: {
      template_type: "button",
      text: text,
      buttons: buttons
    }
  }
});
