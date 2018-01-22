# nguyentuandat.github.io
Axel Muusfeldts Fond theme 
========
@author:    [Đạt Nguyễn](mailto:nguyentuandat.vn@gmail.com).

@version:   1.0.0.
### How to install
1. Upload theme to themes folder and active it.
2. Install and active all required plugins.
3. Import sample data.
4. Done

### How to configure
#### Configure Contact form 7 plugin
1. Generate contact form
```html
<div class="row">
<div class="col-md-12">[text* your-name class:form-control placeholder "Navn"]</div>
</div>
<div class="row">
<div class="col-md-6">[email* your-email id:cfEmail class:form-control placeholder "E-mail-adresse"] </div>
<div class="col-md-6">[confirm_email* confirm_email-842 id:cfEmail2 class:form-control placeholder "Gentag E-mail-adresse"] </div>
</div>
<div class="row">
<div class="col-md-6">[text phone class:form-control placeholder "Telefonnummer"]</div>
</div>
<div class="row">
<div class="col-md-12">[text* your-subject class:form-control placeholder "Emne"] </div>
</div>
<div class="row">
<div class="col-md-12">[textarea your-message class:form-control placeholder "Besked"] </div>
</div>
<div class="row"><div class="col-md-12" style="text-align:center;">[submit class:btn-amf "Send"]</div></div>
```
2. Go to tab **Additional settings**, add this codes:
```javascript
on_sent_ok: "showPopup('#modalThankyou');"
```
