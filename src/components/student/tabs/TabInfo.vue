<template>
  <div class="w-[640px]">
    <Loading v-if="chara == null" />
    <div v-else class="flex flex-col gap-1">
      <div class="flex flex-row">
        <v-card>
          <div class="flex flex-row">
            <div class="w-24 m-2">
              <GameImg :path="chara.costume.CollectionTexturePath" />
            </div>
            <div>
              <div class="flex flex-row m-2 items-center">
                <div class="border-2 rounded-lg border-gray-500 bg-white h-fit">
                  <v-img :src="schoolIcon(chara.obj.School)" width="44"></v-img>
                </div>
                <div>
                  <div class="flex flex-row mx-2 gap-1">
                    <RichText :text="chara.useSchool()" />
                    <RichText :text="chara.useProfile('SchoolYear')" />
                  </div>
                  <div class="flex flex-row mx-2 gap-1">
                    部活
                    <RichText :text="chara.useClub()" />
                  </div>
                </div>
              </div>
              <div class="flex flex-row gap-1">
                <div>
                  <RichText
                    class="text-center text-xs"
                    :text="chara.useProfile('FamilyNameRuby')"
                  />
                  <RichText
                    class="text-3xl"
                    :text="chara.useProfile('FamilyName')"
                  />
                </div>
                <div>
                  <RichText class="text-xs" text="　" />
                  <RichText
                    class="text-3xl"
                    :text="chara.useProfile('PersonalName')"
                  />
                </div>
              </div>
            </div>
          </div>
          <p class="my-2 text-center w-full bg-cyan-900">基本情報</p>
          <RichText
            class="mx-1"
            :text="chara.useProfile('ProfileIntroduction')"
          />
        </v-card>
        <v-card class="min-w-60">
          <v-container>
            <v-row v-for="(arr, key) in info" :key>
              <v-col> {{ arr[0] }} </v-col>
              <V-col> {{ arr[1] }} </V-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { schoolIcon } from "@/components/GameImg/icon";
import { ERR_HANDLE } from "~/components/warn/error";
import { useStudent } from "../student";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const chara = computed(() =>
  useStudent(props.cid).value.unwrapOrElse(errHandle),
);

const info = computed(() => {
  if (chara.value == null) return chara.value;
  const f = chara.value.useProfile.bind(chara.value);
  return [
    ["年齢", f("CharacterAge").unwrapOrElse(errHandle)],
    ["誕生日", f("Birthday").unwrapOrElse(errHandle)],
    ["身長", f("CharHeight").unwrapOrElse(errHandle)],
    ["趣味", f("Hobby").unwrapOrElse(errHandle)],
    ["デザイン", f("DesignerName").unwrapOrElse(errHandle)],
    ["イラスト", f("IllustratorName").unwrapOrElse(errHandle)],
    ["CV.", f("CharacterVoice").unwrapOrElse(errHandle)],
  ];
});
</script>
