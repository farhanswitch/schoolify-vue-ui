<script setup>
import AiTutorSection from './components/sections/AiTutorSection.vue'
import BenefitGrid from './components/sections/BenefitGrid.vue'
import CategoryDarkSection from './components/sections/CategoryDarkSection.vue'
import ClassroomSection from './components/sections/ClassroomSection.vue'
import ClosingCta from './components/sections/ClosingCta.vue'
import FeatureShowcase from './components/sections/FeatureShowcase.vue'
import HeroSection from './components/sections/HeroSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import StatsSection from './components/sections/StatsSection.vue'
import TheFooter from './components/sections/TheFooter.vue'
import TheNavbar from './components/sections/TheNavbar.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <TheNavbar />
    <main>
      <HeroSection />
      <FeatureShowcase />
      <StatsSection />
      <CategoryDarkSection />
      <BenefitGrid />
      <AiTutorSection />
      <ClassroomSection />
      <PricingSection />
      <ClosingCta />
    </main>
    <TheFooter />
  </div>
</template>
