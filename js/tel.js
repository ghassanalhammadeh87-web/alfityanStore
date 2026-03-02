// <!-- tel script -->
  const input = document.querySelector("#phone");
   window.intlTelInput(input,
    {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch('https://ipinfo.io/json?token=<YOUR_TOKEN>',
          {
            headers: { 'Accept': 'application/json' }
          }).then((resp) => resp.json()).then((resp) => {
            callback(resp.country);
          }).catch(() => {
            callback('us');
          });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      // تفعيل خيار البحث 
      allowDropdown: true,
      autoHideDialCode: true,
      autoPlaceholder: "polite",
      dropdownContainer: document.body,
      excludeCountries: ["us"],
      formatOnDisplay: true,
      hiddenInput: "full_number",
      nationalMode: true,
      separateDialCode: true,
      preferredCountries: ['us', 'gb', 'ca'],
      customContainer: "intl-tel-input separate-dial-code",
      separateDialCode: true,
      initialCountry: "auto",
      excludeCountries: ["af", "al"],
      geoIpLookup: function (callback) {
        fetch("https://ipinfo.io", {
          headers: { "Accept": "application/json" }
        }).then((resp) => resp.json()).then((resp) => {
          const countryCode = (resp && resp.country) ? resp.country : "us";
          callback(countryCode);
        });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      // إضافة البحث 
      placeholderNumberType: "MOBILE",
      separateDialCode: true
    });



