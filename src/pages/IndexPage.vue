<template>
  <q-page>
    <div class="">

    <div class="row items-center">
        <div class="col-xs-12 col-md-4">
          <q-card bordered flat class="bg-9 my-card q-ma-xs">
            <q-card-section>
              <div class="text-h5">
                Device Info
              </div>
              <q-separator/>
                <div class="text-subtitle1">
                  {{ di.name }}
                  <q-badge align="middle" :label="di.type" />
                </div>
                <div class="text-body1">
                  Address: {{ di.address }}
                </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-4">
          <q-card bordered flat class="bg-9 my-card q-ma-xs">
            <q-card-section>
              <div class="text-h5">
                Device Info
              </div>
              <q-separator/>
                <div class="text-subtitle1">
                  {{ di.name }}
                  <q-badge align="middle" :label="di.type" />
                </div>
                <div class="text-body1">
                  Address: {{ di.address }}
                </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-4">
          <q-card bordered flat class="bg-9 my-card q-ma-xs">
            <q-card-section>
              <div class="text-h5">
                Device Info
              </div>
              <q-separator/>
                <div class="text-subtitle1">
                  {{ di.name }}
                  <q-badge align="middle" :label="di.type" />
                </div>
                <div class="text-body1">
                  Address: {{ di.address }}
                </div>
            </q-card-section>
          </q-card>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

import { getCurrentInstance, ref } from 'vue';

const { proxy } = getCurrentInstance();

let di = ref(proxy.$harbora.deviceInfo.default());

async function run() {
  let r = await proxy.$harbora.deviceInfo.get();
  di.value = r;
}

run();

//proxy.$harbora.deviceInfo.get();
</script>
