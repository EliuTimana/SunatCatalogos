<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label :for="'select-fetcher-' + type">Seleccione una opción</label>
                    <select :id="'select-fetcher-' + type" class="custom-select" v-model="selectedItem" @change="fetchData()">
                        <option v-for="(e, index) in entries" :value="e.code">
                            {{e.label}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-12">
                <a :href="url" target="_blank" v-if="url"><code>{{url}}</code></a>
                <div>
                    <pre class="text-white small-code" v-if="responseBody">{{responseBody}}</pre>
                    <loading-indicator v-if="loadingResponse"></loading-indicator>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import entrypoints from "../../endpoints"
    import LoadingIndicator from "./LoadingIndicator";

    export default {
        name: "DataFetcher",
        components: {LoadingIndicator},
        props: ['type'],
        data() {
            return {
                selectedItem: '',
                responseBody: '',
                url: '',
                loadingResponse: false
            };
        },
        computed: {
            entries() {
                return entrypoints.catalogo_08
            }
        },
        methods: {
            getUrl(code) {
                return `https://raw.githubusercontent.com/EliuTimana/SunatCatalogos/master/data/08/${code}.${this.type}`;
            },
            fetchData() {
                const e = this.entries.find(e => e.code === this.selectedItem);
                if (!e) {
                    this.url = '';
                    this.responseBody = '';
                    return;
                }
                const url = this.getUrl(e.code);
                this.url = url;
                this.loadingResponse = true;
                fetch(url).then((r) => {
                    if (this.type === 'json') {
                        r.json().then(data => {
                            this.responseBody = data;
                            this.loadingResponse = false;
                        });
                    } else {
                        r.text().then(data => {
                            this.responseBody = data;
                            this.loadingResponse = false;
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .small-code {
        overflow: auto;
        max-height: 300px;
    }

</style>
