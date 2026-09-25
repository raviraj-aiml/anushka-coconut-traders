/* =========================================================
   ANUSHKA COCONUT TRADERS
   COMPLETE JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   BUSINESS CONFIG
========================================================= */

const businessConfig = {

    name: "Anushka Coconut Traders",

    phone: "919177711122",

    displayPhone: "+91 9177711122",

    whatsapp:
        "https://wa.me/919177711122"

};



/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        nav_home: "Home",
        nav_about: "About",
        nav_products: "Products",
        nav_why: "Why Us",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        nav_order: "Order Now",
        nav_terms: "T&C",


        hero_eyebrow: "FRESH FROM THE FARM",
        hero_title_1: "Pure Fresh",
        hero_title_2: "Coconuts.",
        hero_description:
            "Naturally fresh coconuts, carefully selected from trusted farms and delivered with care.",
        hero_order: "Order Fresh Coconuts",
        hero_whatsapp: "WhatsApp Us",
        hero_scroll: "SCROLL TO EXPLORE",
        hero_bottom:
            "Fresh • Natural • Carefully Selected",

        about_eyebrow: "ABOUT US",
        about_title_1: "From Our Farms",
        about_title_2: "To Your Hands.",
        about_text_1:
            "We believe that a good coconut should taste naturally fresh. Our coconuts are carefully selected and sourced with quality and freshness in mind.",
        about_text_2:
            "From individual customers to retailers, restaurants and bulk buyers, we focus on supplying fresh coconuts with dependable service.",
        about_feature_1: "Naturally Fresh",
        about_feature_1_text:
            "Carefully selected coconuts",
        about_feature_2: "Reliable Delivery",
        about_feature_2_text:
            "Packed and delivered with care",
        about_button:
            "Explore Our Products",

        badge:
            "Naturally Fresh",

        stat_1:
            "Natural Freshness",
        stat_2:
            "Orders Served",
        stat_3:
            "Experience",
        stat_4:
            "Order Support",

        products_eyebrow:
            "OUR PRODUCTS",
        products_title_1:
            "Freshness For",
        products_title_2:
            "Every Need.",
        products_description:
            "Choose the coconut that suits your requirement — from everyday use to bulk orders.",

        
        product_1_title:
            "Large Coconuts(500g)",
        product_1_text:
            "Price: 30Rs.(per coconut)",
        product_1_button:
            "Order Now",

        
            
        product_2_title:
            "Medium Coconuts(350g)",
        product_2_text:
            "Price: 25Rs.(per coconut)",
        product_2_button:
            "Order Now",

       
        product_3_title:
            "Small Coconuts(250g)",
        product_3_text:
            "Price: 20Rs.(per coconut)",
        product_3_button:
            "Order Now",

        price_note_1: 
           "★Prices may vary with time",
        price_note_2:
           "★Bargaining Option is available",
            

        why_eyebrow:
            "WHY CHOOSE US",
        why_title_1:
            "Pure.",
        why_title_2:
            "Fresh. Reliable.",

        why_1_title:
            "Farm Fresh",
        why_1_text:
            "Fresh coconuts selected with quality and freshness in mind.",

        why_2_title:
            "Quality Selected",
        why_2_text:
            "We focus on supplying coconuts that meet our quality standards.",

        why_3_title:
            "Careful Packing",
        why_3_text:
            "Orders are handled and packed carefully before delivery.",

        why_4_title:
            "Trusted Service",
        why_4_text:
            "We value long-term relationships with customers and businesses.",

        gallery_eyebrow:
            "OUR GALLERY",
        gallery_title_1:
            "A Glimpse Of",
        gallery_title_2:
            "Freshness.",
        gallery_view:
            "View",

        reviews_eyebrow:
            "CUSTOMER WORDS",
        reviews_title_1:
            "Freshness They",
        reviews_title_2:
            "Can Taste.",

        testimonial_1:
            "\"The coconuts were fresh, properly packed and delivered on time. Really good quality.\"",

        testimonial_2:
            "\"Very good quality and service. The coconuts were fresh and exactly what we needed.\"",

        testimonial_3:
            "\"Reliable supplier and excellent freshness. We would definitely order again.\"",

        customer:
            "Customer",

        business_customer:
            "Business Customer",

        order_eyebrow:
            "PLACE YOUR ORDER",
        order_title_1:
            "Let's Get Fresh",
        order_title_2:
            "Coconuts To You.",
        order_description:
            "Tell us what you need and we'll get back to you through WhatsApp.",

        order_whatsapp:
            "WhatsApp",
        order_call:
            "Call Us",

        import_export:
            "★ Import & Export Options Available",

        customized_packing:
            "★ Customized Packing Available as per Customer Requirements",

        form_name:
            "Your Name",
        form_name_placeholder:
            "Enter your name",

        form_phone:
            "Phone Number",
        form_phone_placeholder:
            "Enter phone number",

        form_product:
            "Product",
        form_product_placeholder:
            "Select product",

        form_tender:
            "Large Coconuts",
        form_mature:
            "Medium Coconuts",
        form_bulk:
            "Small Coconuts",

        form_quantity:
            "Quantity",
        form_quantity_placeholder:
            "e.g. 100 coconuts",

        form_location:
            "Delivery Location",
        form_location_placeholder:
            "Enter delivery location",

        form_message:
            "Message",
        form_message_placeholder:
            "Tell us about your requirement",

        form_submit:
            "Send Order On WhatsApp",

        form_note:
            "Your details are only used to respond to your enquiry.",

        contact_eyebrow:
            "CONTACT",
        contact_title_1:
            "Have A",
        contact_title_2:
            "Requirement?",
        contact_description:
            "Whether you need a few coconuts or a bulk order, get in touch with us.",
        contact_whatsapp:
            "Chat On WhatsApp",

        phone:
            "PHONE",
        whatsapp:
            "WHATSAPP",
        location:
            "LOCATION",
        contact_location: "OUR LOCATION",
        contact_business: "Anushka Coconut Traders",
        contact_address: "Add your complete business address here.",
        contact_map: "Open in Google Maps",

        chat:
            "Chat With Us",
        india:
            "India",

        footer_description:
            "Naturally fresh coconuts, delivered with care.",

        footer_explore:
            "Explore",

        footer_order:
            "Place Order",

        footer_rights:
            "All rights reserved.",

        footer_quality:
            "Freshness • Quality • Trust"

    },


    /* =====================================================
       TELUGU
    ===================================================== */

    te: {

        nav_home: "హోమ్",
        nav_about: "మా గురించి",
        nav_products: "ఉత్పత్తులు",
        nav_why: "ఎందుకు మేము",
        nav_gallery: "గ్యాలరీ",
        nav_reviews: "సమీక్షలు",
        nav_contact: "సంప్రదించండి",
        nav_order: "ఆర్డర్ చేయండి",
        nav_terms: "నిబంధనలు",


        hero_eyebrow:
            "తాజాగా వ్యవసాయ క్షేత్రం నుండి",
        hero_title_1:
            "స్వచ్ఛమైన తాజా",
        hero_title_2:
            "కొబ్బరికాయలు.",
        hero_description:
            "నమ్మకమైన వ్యవసాయ క్షేత్రాల నుండి జాగ్రత్తగా ఎంపిక చేసిన సహజమైన తాజా కొబ్బరికాయలను మీకు అందిస్తున్నాము.",
        hero_order:
            "తాజా కొబ్బరికాయలను ఆర్డర్ చేయండి",
        hero_whatsapp:
            "వాట్సాప్ చేయండి",
        hero_scroll:
            "అన్వేషించడానికి స్క్రోల్ చేయండి",
        hero_bottom:
            "తాజా • సహజమైన • జాగ్రత్తగా ఎంపిక చేసిన",

        about_eyebrow:
            "మా గురించి",
        about_title_1:
            "మా వ్యవసాయ క్షేత్రాల నుండి",
        about_title_2:
            "మీ చేతుల్లోకి.",
        about_text_1:
            "మంచి కొబ్బరికాయ సహజమైన తాజాదనంతో ఉండాలని మేము నమ్ముతున్నాము. నాణ్యత మరియు తాజాదనాన్ని దృష్టిలో ఉంచుకుని మా కొబ్బరికాయలను జాగ్రత్తగా ఎంపిక చేస్తాము.",
        about_text_2:
            "వ్యక్తిగత వినియోగదారుల నుండి రిటైలర్లు, రెస్టారెంట్లు మరియు భారీ కొనుగోలుదారుల వరకు, నమ్మకమైన సేవతో తాజా కొబ్బరికాయలను అందించడంపై మేము దృష్టి పెడతాము.",
        about_feature_1:
            "సహజమైన తాజాదనం",
        about_feature_1_text:
            "జాగ్రత్తగా ఎంపిక చేసిన కొబ్బరికాయలు",
        about_feature_2:
            "నమ్మకమైన డెలివరీ",
        about_feature_2_text:
            "జాగ్రత్తగా ప్యాక్ చేసి అందజేస్తాము",
        about_button:
            "మా ఉత్పత్తులను చూడండి",

        badge:
            "సహజమైన తాజాదనం",

        stat_1:
            "సహజమైన తాజాదనం",
        stat_2:
            "అందించిన ఆర్డర్లు",
        stat_3:
            "అనుభవం",
        stat_4:
            "ఆర్డర్ సహాయం",

        products_eyebrow:
            "మా ఉత్పత్తులు",
        products_title_1:
            "ప్రతి అవసరానికి",
        products_title_2:
            "తాజాదనం.",
        products_description:
            "రోజువారీ వినియోగం నుండి భారీ ఆర్డర్ల వరకు మీ అవసరానికి సరిపోయే కొబ్బరికాయలను ఎంచుకోండి.",

        product_1_title:
            "పెద్ద కొబ్బరికాయలు",
        product_1_text:
            "ధర: రూ.30(కొబ్బరికాయకు)",
        product_1_button:
            "ఆర్డర్ చేయండి",

       
        product_2_title:
            "మీడియం కొబ్బరికాయలు",
        product_2_text:
            "ధర: రూ.25 (కొబ్బరికాయకు)",
        product_2_button:
            "ఆర్డర్ చేయండి",

        
        product_3_title:
            "చిన్న కొబ్బరికాయలు",
        product_3_text:
            "ధర: రూ.20 (కొబ్బరికాయకు)",
        product_3_button:
            "ఆర్డర్ చేయండి",

        price_note_1:
             "★ధరలు కాలానుగుణంగా మారవచ్చు",
        price_note_2:
             "★బేరసారాలు చేసుకునే అవకాశం ఉంది",


        why_eyebrow:
            "ఎందుకు మమ్మల్ని ఎంచుకోవాలి",
        why_title_1:
            "స్వచ్ఛమైన.",

        why_title_2:
            "తాజా. నమ్మకమైన.",

        why_1_title:
            "వ్యవసాయ క్షేత్రం నుండి తాజా",
        why_1_text:
            "నాణ్యత మరియు తాజాదనాన్ని దృష్టిలో ఉంచుకుని ఎంపిక చేసిన తాజా కొబ్బరికాయలు.",

        why_2_title:
            "నాణ్యత ఎంపిక",
        why_2_text:
            "మా నాణ్యత ప్రమాణాలకు అనుగుణంగా ఉండే కొబ్బరికాయలను అందించడంపై మేము దృష్టి పెడతాము.",

        why_3_title:
            "జాగ్రత్తగా ప్యాకింగ్",
        why_3_text:
            "డెలివరీకి ముందు ఆర్డర్లను జాగ్రత్తగా నిర్వహించి ప్యాక్ చేస్తాము.",

        why_4_title:
            "నమ్మకమైన సేవ",
        why_4_text:
            "కస్టమర్లు మరియు వ్యాపారాలతో దీర్ఘకాలిక సంబంధాలకు మేము విలువ ఇస్తాము.",

        gallery_eyebrow:
            "మా గ్యాలరీ",
        gallery_title_1:
            "తాజాదనానికి",
        gallery_title_2:
            "ఒక చూపు.",
        gallery_view:
            "చూడండి",

        reviews_eyebrow:
            "కస్టమర్ల మాటలు",
        reviews_title_1:
            "వారు ఆస్వాదించే",
        reviews_title_2:
            "తాజాదనం.",

        testimonial_1:
            "\"కొబ్బరికాయలు చాలా తాజావిగా ఉన్నాయి. చక్కగా ప్యాక్ చేసి సమయానికి డెలివరీ చేశారు. నాణ్యత చాలా బాగుంది.\"",

        testimonial_2:
            "\"చాలా మంచి నాణ్యత మరియు సేవ. మాకు కావాల్సిన విధంగానే తాజా కొబ్బరికాయలు వచ్చాయి.\"",

        testimonial_3:
            "\"నమ్మకమైన సరఫరాదారు మరియు అద్భుతమైన తాజాదనం. మేము మళ్లీ తప్పకుండా ఆర్డర్ చేస్తాము.\"",

        customer:
            "కస్టమర్",

        business_customer:
            "వ్యాపార కస్టమర్",

        order_eyebrow:
            "మీ ఆర్డర్ ఇవ్వండి",
        order_title_1:
            "తాజా",
        order_title_2:
            "కొబ్బరికాయలు మీకు.",
        order_description:
            "మీకు ఏమి కావాలో మాకు తెలియజేయండి. మేము వాట్సాప్ ద్వారా మిమ్మల్ని సంప్రదిస్తాము.",

        order_whatsapp:
            "వాట్సాప్",
        order_call:
            "కాల్ చేయండి",

        import_export:
            "★ దిగుమతి & ఎగుమతి సౌకర్యాలు అందుబాటులో ఉన్నాయి",

        customized_packing:
            "★ కస్టమర్ అవసరాలకు అనుగుణంగా ప్యాకింగ్ సౌకర్యం అందుబాటులో ఉంది",

        form_name:
            "మీ పేరు",
        form_name_placeholder:
            "మీ పేరు నమోదు చేయండి",

        form_phone:
            "ఫోన్ నంబర్",
        form_phone_placeholder:
            "ఫోన్ నంబర్ నమోదు చేయండి",

        form_product:
            "ఉత్పత్తి",
        form_product_placeholder:
            "ఉత్పత్తిని ఎంచుకోండి",

        form_tender:
            "పెద్ద కొబ్బరికాయలు",
        form_mature:
            "మీడియం కొబ్బరికాయలు",
        form_bulk:
            "చిన్న కొబ్బరికాయలు",

        form_quantity:
            "పరిమాణం",
        form_quantity_placeholder:
            "ఉదా: 100 కొబ్బరికాయలు",

        form_location:
            "డెలివరీ ప్రదేశం",
        form_location_placeholder:
            "డెలివరీ ప్రదేశం నమోదు చేయండి",

        form_message:
            "సందేశం",
        form_message_placeholder:
            "మీ అవసరాన్ని తెలియజేయండి",

        form_submit:
            "వాట్సాప్‌లో ఆర్డర్ పంపండి",

        form_note:
            "మీ వివరాలు మీ విచారణకు స్పందించడానికి మాత్రమే ఉపయోగించబడతాయి.",

        contact_eyebrow:
            "సంప్రదించండి",
        contact_title_1:
            "మీకు ఏదైనా",
        contact_title_2:
            "అవసరమా?",
        contact_description:
            "కొన్ని కొబ్బరికాయలు కావాలన్నా లేదా భారీ ఆర్డర్ కావాలన్నా మమ్మల్ని సంప్రదించండి.",
        contact_whatsapp:
            "వాట్సాప్‌లో చాట్ చేయండి",

        phone:
            "ఫోన్",
        whatsapp:
            "వాట్సాప్",
        location:
            "ప్రదేశం",
        contact_location: "మా ప్రదేశం",
        contact_business: "అనుష్క కొబ్బరి ట్రేడర్స్",
        contact_address: "మీ పూర్తి వ్యాపార చిరునామాను ఇక్కడ జోడించండి.",
        contact_map: "Google Mapsలో తెరవండి",

        chat:
            "మాతో చాట్ చేయండి",
        india:
            "భారతదేశం",

        footer_description:
            "సహజంగా తాజా కొబ్బరికాయలు, జాగ్రత్తగా మీకు అందిస్తాము.",

        footer_explore:
            "అన్వేషించండి",

        footer_order:
            "ఆర్డర్ చేయండి",

        footer_rights:
            "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",

        footer_quality:
            "తాజాదనం • నాణ్యత • నమ్మకం",
        nav_follow:
            "ఫాలో అవ్వండి"

    },


    /* =====================================================
       HINDI
    ===================================================== */

    hi: {

        nav_home: "होम",
        nav_about: "हमारे बारे में",
        nav_products: "उत्पाद",
        nav_why: "हम क्यों",
        nav_gallery: "गैलरी",
        nav_reviews: "समीक्षाएँ",
        nav_contact: "संपर्क करें",
        nav_order: "अभी ऑर्डर करें",
        nav_terms: "नियम और शर्तें",


        hero_eyebrow:
            "खेत से सीधे ताज़ा",
        hero_title_1:
            "शुद्ध ताज़े",
        hero_title_2:
            "नारियल।",
        hero_description:
            "विश्वसनीय खेतों से सावधानीपूर्वक चुने गए प्राकृतिक और ताज़े नारियल, आपकी सुविधा के अनुसार पहुँचाए जाते हैं।",
        hero_order:
            "ताज़े नारियल ऑर्डर करें",
        hero_whatsapp:
            "व्हाट्सऐप करें",
        hero_scroll:
            "जानने के लिए स्क्रॉल करें",
        hero_bottom:
            "ताज़ा • प्राकृतिक • सावधानी से चुने गए",

        about_eyebrow:
            "हमारे बारे में",
        about_title_1:
            "हमारे खेतों से",
        about_title_2:
            "आपके हाथों तक।",
        about_text_1:
            "हम मानते हैं कि एक अच्छा नारियल प्राकृतिक रूप से ताज़ा होना चाहिए। गुणवत्ता और ताज़गी को ध्यान में रखते हुए हमारे नारियल सावधानी से चुने जाते हैं।",
        about_text_2:
            "व्यक्तिगत ग्राहकों से लेकर रिटेलर्स, रेस्तरां और थोक खरीदारों तक, हम भरोसेमंद सेवा के साथ ताज़े नारियल उपलब्ध कराने पर ध्यान देते हैं।",
        about_feature_1:
            "प्राकृतिक ताज़गी",
        about_feature_1_text:
            "सावधानी से चुने गए नारियल",
        about_feature_2:
            "विश्वसनीय डिलीवरी",
        about_feature_2_text:
            "सावधानी से पैक और डिलीवर किया जाता है",
        about_button:
            "हमारे उत्पाद देखें",

        badge:
            "प्राकृतिक ताज़गी",

        stat_1:
            "प्राकृतिक ताज़गी",
        stat_2:
            "पूरे किए गए ऑर्डर",
        stat_3:
            "अनुभव",
        stat_4:
            "ऑर्डर सहायता",

        products_eyebrow:
            "हमारे उत्पाद",
        products_title_1:
            "हर ज़रूरत के लिए",
        products_title_2:
            "ताज़गी।",
        products_description:
            "दैनिक उपयोग से लेकर थोक ऑर्डर तक, अपनी आवश्यकता के अनुसार नारियल चुनें।",

        
        product_1_title:
            "बड़े नारियल",
        product_1_text:
            "कीमत: ₹30 (प्रति नारियल)",
        product_1_button:
            "अभी ऑर्डर करें",

        
        product_2_title:
            "मध्यम नारियल",
        product_2_text:
            "कीमत: ₹25 (प्रति नारियल)",
        product_2_button:
            "अभी ऑर्डर करें",

        
        product_3_title:
            "छोटे नारियल",
        product_3_text:
            "कीमत: ₹20 (प्रति नारियल)",
        product_3_button:
            "अभी ऑर्डर करें",

        price_note_1:
             "★कीमतें समय-समय पर बदल सकती हैं",
        price_note_2:
             "★मोलभाव करने की सुविधा उपलब्ध है",

        why_eyebrow:
            "हमें क्यों चुनें",
        why_title_1:
            "शुद्ध.",

        why_title_2:
            "ताज़ा. विश्वसनीय.",

        why_1_title:
            "खेत से ताज़ा",
        why_1_text:
            "गुणवत्ता और ताज़गी को ध्यान में रखते हुए चुने गए ताज़े नारियल।",

        why_2_title:
            "गुणवत्ता चयन",
        why_2_text:
            "हम अपने गुणवत्ता मानकों के अनुसार नारियल उपलब्ध कराने पर ध्यान देते हैं।",

        why_3_title:
            "सावधानीपूर्वक पैकिंग",
        why_3_text:
            "डिलीवरी से पहले ऑर्डर को सावधानी से संभाला और पैक किया जाता है।",

        why_4_title:
            "विश्वसनीय सेवा",
        why_4_text:
            "हम ग्राहकों और व्यवसायों के साथ लंबे समय के संबंधों को महत्व देते हैं।",

        gallery_eyebrow:
            "हमारी गैलरी",
        gallery_title_1:
            "ताज़गी की",
        gallery_title_2:
            "एक झलक।",
        gallery_view:
            "देखें",

        reviews_eyebrow:
            "ग्राहकों की बातें",
        reviews_title_1:
            "वह ताज़गी",
        reviews_title_2:
            "जिसे वे महसूस करते हैं।",

        testimonial_1:
            "\"नारियल बहुत ताज़े थे, अच्छी तरह पैक किए गए और समय पर डिलीवर हुए। गुणवत्ता बहुत अच्छी थी।\"",

        testimonial_2:
            "\"बहुत अच्छी गुणवत्ता और सेवा। हमें बिल्कुल वही ताज़े नारियल मिले जिनकी हमें आवश्यकता थी।\"",

        testimonial_3:
            "\"विश्वसनीय सप्लायर और बेहतरीन ताज़गी। हम निश्चित रूप से दोबारा ऑर्डर करेंगे।\"",

        customer:
            "ग्राहक",

        business_customer:
            "व्यावसायिक ग्राहक",

        order_eyebrow:
            "अपना ऑर्डर दें",
        order_title_1:
            "ताज़े",
        order_title_2:
            "नारियल आपके लिए।",
        order_description:
            "हमें बताएं कि आपको क्या चाहिए और हम व्हाट्सऐप के माध्यम से आपसे संपर्क करेंगे।",

        order_whatsapp:
            "व्हाट्सऐप",
        order_call:
            "कॉल करें",

        import_export:
            "★ आयात और निर्यात की सुविधा उपलब्ध है",

        customized_packing:
            "★ ग्राहक की आवश्यकताओं के अनुसार पैकिंग की सुविधा उपलब्ध है",

        form_name:
            "आपका नाम",
        form_name_placeholder:
            "अपना नाम दर्ज करें",

        form_phone:
            "फोन नंबर",
        form_phone_placeholder:
            "फोन नंबर दर्ज करें",

        form_product:
            "उत्पाद",
        form_product_placeholder:
            "उत्पाद चुनें",

        form_tender:
            "बड़े नारियल",
        form_mature:
            "मध्यम नारियल",
        form_bulk:
            "छोटे नारियल",

        form_quantity:
            "मात्रा",
        form_quantity_placeholder:
            "उदा. 100 नारियल",

        form_location:
            "डिलीवरी स्थान",
        form_location_placeholder:
            "डिलीवरी स्थान दर्ज करें",

        form_message:
            "संदेश",
        form_message_placeholder:
            "अपनी आवश्यकता बताएं",

        form_submit:
            "व्हाट्सऐप पर ऑर्डर भेजें",

        form_note:
            "आपकी जानकारी का उपयोग केवल आपकी पूछताछ का जवाब देने के लिए किया जाता है।",

        contact_eyebrow:
            "संपर्क करें",
        contact_title_1:
            "कोई",
        contact_title_2:
            "ज़रूरत है?",
        contact_description:
            "चाहे आपको कुछ नारियल चाहिए या थोक ऑर्डर, हमसे संपर्क करें।",
        contact_whatsapp:
            "व्हाट्सऐप पर चैट करें",

        phone:
            "फोन",
        whatsapp:
            "व्हाट्सऐप",
        location:
            "स्थान",
        contact_location: "हमारा स्थान",
        contact_business: "अनुष्का कोकोनट ट्रेडर्स",
        contact_address: "अपना पूरा व्यवसायिक पता यहाँ जोड़ें।",
        contact_map: "Google Maps में खोलें",
        
        chat:
            "हमसे चैट करें",
        india:
            "भारत",

        footer_description:
            "प्राकृतिक रूप से ताज़े नारियल, सावधानी से आपके लिए।",

        footer_explore:
            "देखें",

        footer_order:
            "ऑर्डर करें",

        footer_rights:
            "सर्वाधिकार सुरक्षित।",

        footer_quality:
            "ताज़गी • गुणवत्ता • भरोसा",
        nav_follow:
            "हमें फ़ॉलो करें "

    }

};



/* =========================================================
   LANGUAGE STATE
========================================================= */

let currentWebsiteLanguage = "en";

const LANGUAGE_STORAGE_KEY =
    "websiteLanguage";



/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initPreloader();

        initNavbar();

        initMobileMenu();

        initCustomCursor();

        initRevealAnimations();

        initCounters();

        initGallery();

        initOrderForm();

        initVideoSound();

        initMagneticButtons();

        initLanguageSwitcher();

    }
);



/* =========================================================
   PRELOADER
========================================================= */

function initPreloader() {

    const preloader =
        document.getElementById("preloader");

    if (!preloader)
        return;


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    preloader.classList.add(
                        "hide"
                    );

                    document.body.classList.remove(
                        "no-scroll"
                    );

                },
                1200
            );

        }
    );

}



/* =========================================================
   NAVBAR
========================================================= */

function initNavbar() {

    const navbar =
        document.getElementById("navbar");

    if (!navbar)
        return;


    function updateNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    initActiveNavigation();

}



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (!sections.length ||
        !navLinks.length)
        return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        )
                            return;


                        const id =
                            entry.target.id;


                        navLinks.forEach(
                            link => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        section => {

            observer.observe(
                section
            );

        }
    );

}



/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const navMenu =
        document.getElementById(
            "navMenu"
        );


    if (!menuToggle || !navMenu)
        return;


    menuToggle.addEventListener(
        "click",
        () => {

            menuToggle.classList.toggle(
                "active"
            );

            navMenu.classList.toggle(
                "open"
            );

        }
    );


    navMenu
        .querySelectorAll(
            "a"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        menuToggle.classList.remove(
                            "active"
                        );

                        navMenu.classList.remove(
                            "open"
                        );

                    }
                );

            }
        );

}



/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initCustomCursor() {

    const dot =
        document.querySelector(
            ".cursor-dot"
        );

    const ring =
        document.querySelector(
            ".cursor-ring"
        );


    if (!dot || !ring)
        return;


    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            dot.style.left =
                `${mouseX}px`;

            dot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) *
            0.15;

        ringY +=
            (mouseY - ringY) *
            0.15;


        ring.style.left =
            `${ringX}px`;

        ring.style.top =
            `${ringY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const interactiveElements =
        document.querySelectorAll(
            "a, button, input, textarea, select"
        );


    interactiveElements.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    ring.style.width =
                        "48px";

                    ring.style.height =
                        "48px";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    ring.style.width =
                        "34px";

                    ring.style.height =
                        "34px";

                }
            );

        }
    );

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );


    if (!elements.length)
        return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.12
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}



/* =========================================================
   COUNTERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    if (!counters.length)
        return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        )
                            return;


                        const counter =
                            entry.target;

                        const target =
                            Number(
                                counter.dataset.target
                            );


                        let current = 0;

                        const duration =
                            1600;

                        const start =
                            performance.now();


                        function animate(
                            timestamp
                        ) {

                            const progress =
                                Math.min(
                                    (
                                        timestamp -
                                        start
                                    ) /
                                    duration,
                                    1
                                );


                            const eased =
                                1 -
                                Math.pow(
                                    1 - progress,
                                    3
                                );


                            current =
                                Math.floor(
                                    eased *
                                    target
                                );


                            counter.textContent =
                                current;


                            if (
                                progress <
                                1
                            ) {

                                requestAnimationFrame(
                                    animate
                                );

                            } else {

                                counter.textContent =
                                    target;

                            }

                        }


                        requestAnimationFrame(
                            animate
                        );


                        observer.unobserve(
                            counter
                        );

                    }
                );

            },
            {
                threshold:
                    0.5
            }
        );


    counters.forEach(
        counter => {

            observer.observe(
                counter
            );

        }
    );

}



/* =========================================================
   GALLERY
========================================================= */

function initGallery() {

    const track =
        document.querySelector(
            ".gallery-track"
        );

    const items =
        document.querySelectorAll(
            ".gallery-item"
        );

    const previous =
        document.querySelector(
            ".gallery-prev"
        );

    const next =
        document.querySelector(
            ".gallery-next"
        );


    if (!track ||
        !items.length)
        return;


    let currentIndex = 0;


    function getVisibleItems() {

        if (
            window.innerWidth <=
            700
        ) {

            return 1;

        }


        if (
            window.innerWidth <=
            1100
        ) {

            return 2;

        }


        return 3;

    }


    function updateGallery() {

        const visible =
            getVisibleItems();

        const maxIndex =
            Math.max(
                0,
                items.length -
                visible
            );


        currentIndex =
            Math.min(
                currentIndex,
                maxIndex
            );


        const itemWidth =
            items[0].getBoundingClientRect()
                .width;


        const gap =
            18;


        track.style.transform =
            `translateX(-${
                currentIndex *
                (itemWidth + gap)
            }px)`;

    }


    if (next) {

        next.addEventListener(
            "click",
            () => {

                const visible =
                    getVisibleItems();

                const maxIndex =
                    Math.max(
                        0,
                        items.length -
                        visible
                    );


                currentIndex =
                    Math.min(
                        currentIndex + 1,
                        maxIndex
                    );


                updateGallery();

            }
        );

    }


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                currentIndex =
                    Math.max(
                        currentIndex - 1,
                        0
                    );


                updateGallery();

            }
        );

    }


    window.addEventListener(
        "resize",
        updateGallery
    );


    updateGallery();


    initLightbox(
        items
    );

}



/* =========================================================
   LIGHTBOX
========================================================= */

function initLightbox(items) {

    const lightbox =
        document.getElementById(
            "galleryLightbox"
        );

    const image =
        document.getElementById(
            "galleryLightboxImage"
        );

    const counter =
        document.getElementById(
            "galleryLightboxCounter"
        );

    const closeButton =
        document.getElementById(
            "galleryLightboxClose"
        );

    const previous =
        document.getElementById(
            "galleryLightboxPrev"
        );

    const next =
        document.getElementById(
            "galleryLightboxNext"
        );


    if (
        !lightbox ||
        !image ||
        !items.length
    )
        return;


    let currentIndex = 0;


    function showImage(index) {

        currentIndex =
            (
                index +
                items.length
            ) %
            items.length;


        const source =
            items[
                currentIndex
            ].dataset.galleryImage;


        image.src =
            source;


        image.alt =
            translations[
                currentWebsiteLanguage
            ]?.gallery_title_2 ||
            "Coconut gallery";


        if (counter) {

            counter.textContent =
                `${currentIndex + 1} / ${items.length}`;

        }

    }


    function openLightbox(index) {

        showImage(index);

        lightbox.classList.add(
            "open"
        );

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "no-scroll"
        );

    }


    function closeLightbox() {

        lightbox.classList.remove(
            "open"
        );

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    items.forEach(
        (item, index) => {

            item.addEventListener(
                "click",
                () => {

                    openLightbox(
                        index
                    );

                }
            );

        }
    );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                showImage(
                    currentIndex - 1
                );

            }
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            () => {

                showImage(
                    currentIndex + 1
                );

            }
        );

    }


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );


    window.galleryLightboxState = {

        next: () => {

            showImage(
                currentIndex + 1
            );

        },

        previous: () => {

            showImage(
                currentIndex - 1
            );

        },

        close:
            closeLightbox

    };

}



/* =========================================================
   ORDER FORM → WHATSAPP
========================================================= */

function initOrderForm() {

    const form =
        document.getElementById(
            "orderForm"
        );


    if (!form)
        return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "customerName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "customerPhone"
                ).value.trim();


            const product =
                document.getElementById(
                    "productType"
                ).value;


            const quantity =
                document.getElementById(
                    "quantity"
                ).value.trim();


            const location =
                document.getElementById(
                    "location"
                ).value.trim();


            const message =
                document.getElementById(
                    "orderMessage"
                ).value.trim();


            if (!name || !phone) {

                alert(
                    "Please enter your name and phone number."
                );

                return;

            }


            const whatsappMessage = `

🥥 *FRESH COCONUT ORDER*

━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}

📱 *Phone:* ${phone}

🥥 *Product:* ${product || "Not specified"}

📦 *Quantity:* ${quantity || "Not specified"}

📍 *Delivery Location:* ${location || "Not specified"}

💬 *Message:*
${message || "No additional message"}

━━━━━━━━━━━━━━━━━━

Sent from Anushka Coconut Traders Website

            `.trim();


            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            const whatsappURL =
                `https://wa.me/${businessConfig.phone}?text=${encodedMessage}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}

/* =========================================================
   HERO VIDEO + VISIBILITY + SOUND
========================================================= */

function initVideoSound() {

    const video =
        document.getElementById(
            "heroVideo"
        );

    const button =
        document.getElementById(
            "videoSound"
        );

    const home =
        document.getElementById(
            "home"
        );


    if (!video || !button || !home)
        return;


    /* ---------------------------------------------
       DEFAULT STATE
    --------------------------------------------- */

    let soundEnabled =
        localStorage.getItem(
            "heroVideoSound"
        ) === "true";


    /*
       Browser autoplay policy:

       Start muted.
       Sound will become active after
       the user clicks the sound button.
    */

    video.muted =
        !soundEnabled;


    /* ---------------------------------------------
       UPDATE SOUND BUTTON
    --------------------------------------------- */

    function updateSoundButton() {

        if (soundEnabled) {

            button.innerHTML =
                `<i class="fa-solid fa-volume-high"></i>`;

            button.setAttribute(
                "aria-label",
                "Mute video"
            );

        } else {

            button.innerHTML =
                `<i class="fa-solid fa-volume-xmark"></i>`;

            button.setAttribute(
                "aria-label",
                "Turn on video sound"
            );

        }

    }


    updateSoundButton();


    /* ---------------------------------------------
       PLAY VIDEO
    --------------------------------------------- */

    async function playHeroVideo() {

        /*
           Only play when Home is visible.
        */

        if (
            document.visibilityState !==
            "visible"
        ) {
            return;
        }


        try {

            video.muted =
                !soundEnabled;

            await video.play();

        } catch (error) {

            console.log(
                "Hero video autoplay:",
                error
            );

        }

    }


    /* ---------------------------------------------
       PAUSE VIDEO
    --------------------------------------------- */

    function pauseHeroVideo() {

        video.pause();

    }


    /* ---------------------------------------------
       SOUND BUTTON
    --------------------------------------------- */

    button.addEventListener(
        "click",
        async () => {

            soundEnabled =
                !soundEnabled;


            localStorage.setItem(
                "heroVideoSound",
                soundEnabled
            );


            video.muted =
                !soundEnabled;


            updateSoundButton();


            if (soundEnabled) {

                try {

                    await video.play();

                } catch (error) {

                    console.log(
                        "Video audio could not be enabled:",
                        error
                    );

                }

            }

        }
    );


    /* ---------------------------------------------
       HOME VISIBILITY
    --------------------------------------------- */

    const homeObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            /*
                               HOME IS VISIBLE
                            */

                            playHeroVideo();

                        } else {

                            /*
                               USER LEFT HOME
                            */

                            pauseHeroVideo();

                        }

                    }
                );

            },
            {
                threshold: 0.5
            }
        );


    homeObserver.observe(
        home
    );


    /* ---------------------------------------------
       TAB VISIBILITY
    --------------------------------------------- */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.visibilityState ===
                "visible"
            ) {

                /*
                   Browser tab became active.
                   Let IntersectionObserver decide
                   whether Home is currently visible.
                */

                const rect =
                    home.getBoundingClientRect();


                const visibleHeight =
                    Math.min(
                        rect.bottom,
                        window.innerHeight
                    ) -
                    Math.max(
                        rect.top,
                        0
                    );


                const visibleRatio =
                    visibleHeight /
                    rect.height;


                if (
                    visibleRatio >= 0.5
                ) {

                    playHeroVideo();

                } else {

                    pauseHeroVideo();

                }

            } else {

                /*
                   User changed browser tab.
                   Stop the video.
                */

                pauseHeroVideo();

            }

        }
    );


    /* ---------------------------------------------
       INITIAL CHECK
    --------------------------------------------- */

    setTimeout(
        () => {

            const rect =
                home.getBoundingClientRect();


            const visibleHeight =
                Math.min(
                    rect.bottom,
                    window.innerHeight
                ) -
                Math.max(
                    rect.top,
                    0
                );


            const visibleRatio =
                visibleHeight /
                rect.height;


            if (
                visibleRatio >= 0.5
            ) {

                playHeroVideo();

            } else {

                pauseHeroVideo();

            }

        },
        300
    );

}



/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

function initMagneticButtons() {

    const elements =
        document.querySelectorAll(
            ".magnetic"
        );


    if (
        window.matchMedia(
            "(max-width: 900px)"
        ).matches
    ) {

        return;

    }


    elements.forEach(
        element => {

            element.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        element.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    element.style.transform =
                        `translate(${x * 0.10}px, ${y * 0.10}px)`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        }
    );

}



/* =========================================================
   LANGUAGE SWITCHER
   ENGLISH / TELUGU / HINDI
   NO PAGE REFRESH
========================================================= */

function initLanguageSwitcher() {

    const desktopSwitcher =
        document.querySelector(
            ".navbar > .nav-container > .language-switcher"
        );


    const desktopButton =
        document.getElementById(
            "languageBtn"
        );


    const desktopDropdown =
        document.getElementById(
            "languageDropdown"
        );


    const desktopCurrent =
        document.getElementById(
            "currentLanguage"
        );


    const mobileButton =
        document.getElementById(
            "mobileLanguageBtn"
        );


    const mobileDropdown =
        document.getElementById(
            "mobileLanguageDropdown"
        );


    const mobileCurrent =
        document.getElementById(
            "mobileCurrentLanguage"
        );


    const allOptions =
        document.querySelectorAll(
            ".language-option"
        );


    if (
        !desktopButton ||
        !desktopDropdown
    ) {

        console.error(
            "Language switcher HTML not found."
        );

        return;

    }


    /* =====================================================
       LANGUAGE NAMES
    ===================================================== */

    const languageNames = {

        en: "English",

        te: "తెలుగు",

        hi: "हिन्दी"

    };


    /* =====================================================
       APPLY LANGUAGE
    ===================================================== */

    function applyLanguage(
        language
    ) {

        if (
            !translations[language]
        ) {

            language = "en";

        }


        currentWebsiteLanguage =
            language;


        const dictionary =
            translations[language];


        /* ---------------------------------------------
           NORMAL TEXT
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                element => {

                    const key =
                        element.dataset.i18n;


                    if (
                        dictionary[key] !==
                        undefined
                    ) {

                        /*
                         IMPORTANT:
                         textContent is used only on
                         elements that contain the
                         translated text itself.
                        */

                        element.textContent =
                            dictionary[key];

                    }

                }
            );



        /* ---------------------------------------------
           PLACEHOLDERS
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                element => {

                    const key =
                        element.dataset
                            .i18nPlaceholder;


                    if (
                        dictionary[key] !==
                        undefined
                    ) {

                        element.placeholder =
                            dictionary[key];

                    }

                }
            );



        /* ---------------------------------------------
           SELECT OPTIONS
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n-option]"
            )
            .forEach(
                option => {

                    const key =
                        option.dataset
                            .i18nOption;


                    if (
                        dictionary[key] !==
                        undefined
                    ) {

                        option.textContent =
                            dictionary[key];

                    }

                }
            );



        /* ---------------------------------------------
           LANGUAGE BUTTON
        --------------------------------------------- */

        if (desktopCurrent) {

            desktopCurrent.textContent =
                languageNames[
                    language
                ];

        }


        if (mobileCurrent) {

            mobileCurrent.textContent =
                languageNames[
                    language
                ];

        }



        /* ---------------------------------------------
           ACTIVE OPTION
        --------------------------------------------- */

        allOptions.forEach(
            option => {

                const isActive =
                    option.dataset.language ===
                    language;


                option.classList.toggle(
                    "active",
                    isActive
                );


                option.setAttribute(
                    "aria-pressed",
                    String(
                        isActive
                    )
                );

            }
        );



        /* ---------------------------------------------
           HTML LANGUAGE
        --------------------------------------------- */

        document.documentElement.lang =
            language;



        /* ---------------------------------------------
           SAVE LANGUAGE
        --------------------------------------------- */

        try {

            localStorage.setItem(
                LANGUAGE_STORAGE_KEY,
                language
            );

        } catch (error) {

            console.warn(
                "Could not save language preference.",
                error
            );

        }



        /* ---------------------------------------------
           CLOSE DROPDOWNS
        --------------------------------------------- */

        closeLanguageDropdowns();

    }



    /* =====================================================
       OPEN / CLOSE DESKTOP
    ===================================================== */

    if (desktopButton) {

        desktopButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const isOpen =
                    desktopSwitcher?.classList.contains(
                        "open"
                    );


                closeLanguageDropdowns();


                if (!isOpen) {

                    desktopSwitcher?.classList.add(
                        "open"
                    );


                    desktopButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    }



    /* =====================================================
       OPEN / CLOSE MOBILE
    ===================================================== */

    if (mobileButton) {

        mobileButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const mobileSwitcher =
                    mobileButton.closest(
                        ".language-switcher"
                    );


                const isOpen =
                    mobileSwitcher?.classList.contains(
                        "open"
                    );


                closeLanguageDropdowns();


                if (!isOpen) {

                    mobileSwitcher?.classList.add(
                        "open"
                    );


                    mobileButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    }



    /* =====================================================
       LANGUAGE OPTION CLICK
    ===================================================== */

    allOptions.forEach(
        option => {

            option.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const language =
                        option.dataset.language;


                    applyLanguage(
                        language
                    );

                }
            );

        }
    );



    /* =====================================================
       CLOSE DROPDOWNS
    ===================================================== */

    function closeLanguageDropdowns() {

        if (desktopSwitcher) {

            desktopSwitcher.classList.remove(
                "open"
            );

        }


        const mobileSwitcher =
            mobileButton?.closest(
                ".language-switcher"
            );


        if (mobileSwitcher) {

            mobileSwitcher.classList.remove(
                "open"
            );

        }


        if (desktopButton) {

            desktopButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (mobileButton) {

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }



    /* =====================================================
       CLICK OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            const clickedInsideDesktop =
                desktopSwitcher &&
                desktopSwitcher.contains(
                    event.target
                );


            const mobileSwitcher =
                mobileButton?.closest(
                    ".language-switcher"
                );


            const clickedInsideMobile =
                mobileSwitcher &&
                mobileSwitcher.contains(
                    event.target
                );


            if (
                !clickedInsideDesktop &&
                !clickedInsideMobile
            ) {

                closeLanguageDropdowns();

            }

        }
    );



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeLanguageDropdowns();

            }

        }
    );



    /* =====================================================
       LOAD SAVED LANGUAGE
    ===================================================== */

    let savedLanguage =
        "en";


    try {

        savedLanguage =
            localStorage.getItem(
                LANGUAGE_STORAGE_KEY
            ) || "en";

    } catch (error) {

        savedLanguage =
            "en";

    }


    if (
        !translations[
            savedLanguage
        ]
    ) {

        savedLanguage =
            "en";

    }


    applyLanguage(
        savedLanguage
    );



    /* =====================================================
       GLOBAL ACCESS
    ===================================================== */

    window.websiteLanguage = {

        set:
            applyLanguage,

        get:
            () => currentWebsiteLanguage,

        translations:
            translations

    };

}



/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const lightbox =
            document.getElementById(
                "galleryLightbox"
            );


        if (
            !lightbox ||
            !lightbox.classList.contains(
                "open"
            )
        )
            return;


        if (
            event.key ===
            "ArrowRight"
        ) {

            window.galleryLightboxState
                ?.next();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            window.galleryLightboxState
                ?.previous();

        }


        if (
            event.key ===
            "Escape"
        ) {

            window.galleryLightboxState
                ?.close();

        }

    }
);



/* =========================================================
   VIDEO AUTOPLAY
========================================================= */

window.addEventListener(
    "load",
    () => {

        const video =
            document.getElementById(
                "heroVideo"
            );


        if (!video)
            return;


        video.muted = true;


        const playPromise =
            video.play();


        if (
            playPromise !==
            undefined
        ) {

            playPromise.catch(
                () => {

                    console.log(
                        "Autoplay requires user interaction."
                    );

                }
            );

        }

    }
);