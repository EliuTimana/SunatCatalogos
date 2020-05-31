<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label :for="'select-fetcher-' + type">Seleccione una opción</label>
                    <div class="input-group">
                        <select :id="'select-fetcher-' + type" class="custom-select" v-model="selectedItem" @change="fetchData()">
                            <option v-for="(e, index) in entries" :value="e.code">
                                {{e.code + ' - ' + e.label}}
                            </option>
                        </select>
                        <div class="input-group-append" v-if="responseBody">
                            <button class="btn btn-outline-secondary" @click="copyContent()" :disabled="loadingResponse">
                                <i class="fas" :class="copyButtonIcon"></i> {{copyButtonText}}
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-12">
                <a :href="url" target="_blank" v-if="url">
                    <code>{{url}}</code> <i class="fas fa-external-link-alt text-primary"></i>
                </a>
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
                loadingResponse: false,
                copyButtonText: 'Copiar',
                copyButtonIcon: 'fa-copy'
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
                fetch(url)
                    .then(r => r.text())
                    .then(data => {
                        this.responseBody = data;
                        this.loadingResponse = false;
                    });
            },
            copyContent() {
                const element = document.createElement('textarea');
                element.value = this.responseBody;
                document.body.appendChild(element);
                element.select();
                document.execCommand("copy");
                document.body.removeChild(element);
                this.copyButtonText = 'Copiado';
                this.copyButtonIcon = 'fa-check';
                setTimeout(() => {
                    this.copyButtonText = 'Copiar';
                    this.copyButtonIcon = 'fa-copy';
                }, 1000);
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
