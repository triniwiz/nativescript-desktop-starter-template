<script lang="ts" setup>
import { ref, computed, $navigateTo } from 'nativescript-vue';
import { Device, Screen } from '@nativescript/core';
import Playground from './Playground.vue';

const taps = ref(0);
const tapLabel = computed(() =>
  taps.value === 0 ? 'Tap me' : `Tapped ${taps.value}×`,
);

const platform = Device.os;
const screen = `${Math.round(Screen.mainScreen.widthDIPs)} × ${Math.round(
  Screen.mainScreen.heightDIPs,
)} dp`;

const stats = [
  { label: 'Running on', value: platform },
  { label: 'Layout engine', value: 'Taffy' },
  { label: 'Styling', value: 'Tailwind v4' },
];

const features = [
  {
    icon: '▦',
    title: 'CSS Grid',
    body: 'Tracks, spans and auto-fill columns that reflow as the window grows.',
    tint: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300',
  },
  {
    icon: '⇆',
    title: 'Flexbox',
    body: 'Direction, wrapping, gap and alignment behave exactly like the web.',
    tint: 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300',
  },
  {
    icon: '</>',
    title: 'Semantic elements',
    body: 'Write <section>, <h1>, <p> and <button> — they render as native views.',
    tint: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-300',
  },
  {
    icon: '#',
    title: 'Tailwind utilities',
    body: 'Layout, spacing, colour and dark mode straight from your class list.',
    tint: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300',
  },
  {
    icon: '⚡',
    title: 'Rust core',
    body: 'Layout is computed natively by MasonKit, not in JavaScript.',
    tint: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300',
  },
  {
    icon: '◎',
    title: 'One codebase',
    body: 'The same components run on iOS, Android and Windows.',
    tint: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300',
  },
];

const steps = [
  { text: 'Edit this screen in', file: 'src/components/Home.vue' },
  { text: 'Add global styles and variants in', file: 'src/app.css' },
  { text: 'Register extra elements or plugins in', file: 'src/app.ts' },
];
</script>

<template>
  <Frame>
    <Page actionBarHidden="true">
      <Scroll>
        <main class="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-8">
          <!-- Hero -->
          <section class="bg-hero flex flex-col gap-4 rounded-3xl p-8">
            <span
              class="self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white"
            >
              NativeScript × MasonKit
            </span>
            <h1 class="text-4xl font-bold text-white">
              Native apps, laid out like the web.
            </h1>
            <p class="text-base text-white/80">
              Flexbox, CSS Grid and semantic elements powered by a Rust layout
              engine, styled with Tailwind on iOS, Android and Windows.
            </p>
            <div class="flex flex-row flex-wrap gap-3 pt-2">
              <button
                class="btn bg-white text-indigo-600 active:bg-indigo-50"
                @tap="$navigateTo(Playground)"
              >
                Open the playground →
              </button>
              <button
                class="btn bg-white/15 text-white active:bg-white/30"
                @tap="taps++"
              >
                {{ tapLabel }}
              </button>
            </div>
          </section>

          <!-- Stats: each card is at least 160 wide, so they wrap on phones -->
          <div class="flex flex-row flex-wrap gap-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="card flex flex-1 basis-40 flex-col gap-1"
            >
              <span class="text-sm text-slate-500 dark:text-slate-400">
                {{ stat.label }}
              </span>
              <span class="text-2xl font-bold text-slate-900 dark:text-white">
                {{ stat.value }}
              </span>
            </div>
          </div>

          <!-- Features: as many 240-wide columns as fit -->
          <section class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <span class="eyebrow">What's inside</span>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                Everything you need to start
              </h2>
            </div>

            <div
              class="grid grid-cols-[repeat(auto-fill,minmax(240,1fr))] gap-4"
            >
              <article
                v-for="feature in features"
                :key="feature.title"
                class="card flex flex-col gap-3"
              >
                <div
                  class="flex size-12 items-center justify-center rounded-2xl"
                  :class="feature.tint"
                >
                  <span class="text-lg font-bold">{{ feature.icon }}</span>
                </div>
                <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                  {{ feature.title }}
                </h3>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  {{ feature.body }}
                </p>
              </article>
            </div>
          </section>

          <!-- Next steps -->
          <section class="card flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <span class="eyebrow">Next steps</span>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                Make it yours
              </h2>
            </div>
            <div
              v-for="(step, index) in steps"
              :key="step.file"
              class="flex flex-row items-center gap-3"
            >
              <div
                class="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-500"
              >
                <span class="text-sm font-bold text-white">{{ index + 1 }}</span>
              </div>
              <div class="flex flex-1 flex-row flex-wrap items-center gap-2">
                <span class="text-base text-slate-700 dark:text-slate-300">
                  {{ step.text }}
                </span>
                <code
                  class="rounded-lg bg-slate-100 px-2 py-1 text-sm text-indigo-600 dark:bg-slate-800 dark:text-indigo-300"
                >
                  {{ step.file }}
                </code>
              </div>
            </div>
          </section>

          <footer class="flex flex-col items-center py-2">
            <span class="text-xs text-slate-400 dark:text-slate-500">
              {{ platform }} · {{ screen }}
            </span>
          </footer>
        </main>
      </Scroll>
    </Page>
  </Frame>
</template>
