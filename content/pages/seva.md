---
title: Seva
type: Page
sections:
  - type: HeroSection
    title: Our Services
    subtitle: Comprehensive Solutions for All Vehicle Needs
    text: >
      Below you will find detailed information about the services we provide. Each service includes full support, from document preparation to final submission.
    actions:
      - type: Button
        label: Contact Us
        url: '/contact'
        size: large
        variant: outlined
        color: primary
    image:
      type: Image
      url: /images/services-hero.svg
      altText: Vehicle services overview image

  - type: CardsSection
    title: Vehicle Services Overview
    subtitle: Services We Offer
    items:
      - type: Card
        title: Road Tax Payment
        image:
          type: Image
          url: /images/road-tax.svg
          altText: Road tax payment service
        text: >
          We handle all aspects of road tax payments, including alerts and document submissions.
        actions:
          - type: Button
            label: Learn More
            url: '/seva/road-tax'
      
      - type: Card
        title: Vehicle Registration
        image:
          type: Image
          url: /images/registration.svg
          altText: Vehicle registration service
        text: >
          Our team assists with vehicle registrations, ensuring a smooth process from start to finish.
        actions:
          - type: Button
            label: Learn More
            url: '/seva/vehicle-registration'

      - type: Card
        title: Driving License Services
        image:
          type: Image
          url: /images/driving-license.svg
          altText: Driving license services
        text: >
          We assist with obtaining and renewing driving licenses, making it easy for you.
        actions:
          - type: Button
            label: Learn More
            url: '/seva/driving-license'

  - type: FormSection
    title: Contact Us
    subtitle: We’d love to hear from you!
    fields:
      - type: TextField
        name: name
        label: Your Name
        required: true
      - type: TextField
        name: email
        label: Your Email
        required: true
        inputType: email
      - type: TextArea
        name: message
        label: Your Message
        required: true
        rows: 4
    actions:
      - type: Button
        label: Send Message
        url: '/send-message'
---
