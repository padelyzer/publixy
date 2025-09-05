#!/usr/bin/env node

// Este script actualiza todas las clases de espaciado para ser responsivas
// Mapeo de clases antiguas a nuevas clases responsivas

const replacements = [
  // Espaciados de sección
  { old: 'py-16', new: 'py-8 md:py-12 lg:py-16' },
  { old: 'py-20', new: 'py-10 md:py-16 lg:py-20' },
  { old: 'py-24', new: 'py-12 md:py-18 lg:py-24' },
  { old: 'py-32', new: 'py-16 md:py-24 lg:py-32' },
  
  // Padding horizontal
  { old: 'px-6', new: 'px-4 md:px-6' },
  { old: 'px-8', new: 'px-4 md:px-6 lg:px-8' },
  
  // Títulos principales (sin gradient)
  { old: 'text-4xl font-bold', new: 'text-2xl md:text-3xl lg:text-4xl font-bold' },
  { old: 'text-3xl font-bold', new: 'text-xl md:text-2xl lg:text-3xl font-bold' },
  { old: 'text-2xl font-bold', new: 'text-lg md:text-xl lg:text-2xl font-bold' },
  
  // Gaps
  { old: 'gap-8', new: 'gap-4 md:gap-6 lg:gap-8' },
  { old: 'gap-6', new: 'gap-3 md:gap-4 lg:gap-6' },
  { old: 'gap-12', new: 'gap-6 md:gap-8 lg:gap-12' },
  
  // Márgenes
  { old: 'mb-16', new: 'mb-8 md:mb-12 lg:mb-16' },
  { old: 'mb-12', new: 'mb-6 md:mb-8 lg:mb-12' },
  { old: 'mb-8', new: 'mb-4 md:mb-6 lg:mb-8' },
  { old: 'mt-16', new: 'mt-8 md:mt-12 lg:mt-16' },
  { old: 'mt-12', new: 'mt-6 md:mt-8 lg:mt-12' },
  
  // Padding de cards
  { old: 'p-8', new: 'p-4 md:p-6 lg:p-8' },
  { old: 'p-6', new: 'p-3 md:p-4 lg:p-6' },
  
  // Botones
  { old: 'px-8 py-4', new: 'px-6 md:px-8 py-3 md:py-4' },
  { old: 'px-6 py-3', new: 'px-4 md:px-6 py-2 md:py-3' },
];

console.log(`
📱 Responsive Update Script
==========================
Este script mostrará los reemplazos sugeridos para hacer el sitio más móvil-friendly.

Reemplazos sugeridos:
`);

replacements.forEach(({ old, new: newClass }) => {
  console.log(`  "${old}" → "${newClass}"`);
});

console.log(`
Para aplicar estos cambios:
1. Busca cada patrón antiguo en los componentes
2. Reemplaza con la versión responsiva
3. Verifica que no rompa el diseño desktop
`);