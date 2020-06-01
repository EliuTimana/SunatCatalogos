<template>
    <div class="row">
        <div class="col-12">
            <div style="position: relative">
                <div class="mt-3 text-center">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button class="btn btn-success" @click="fetchData()" :disabled="loadingResponse">
                            <span class="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                  v-if="loadingResponse"></span>
                            <i class="fas fa-redo-alt" v-else></i> Cargar
                        </button>
                        <download-link :code="code" type="json" :is-anexo="isAnexo"></download-link>
                        <download-link :code="code" type="csv" :is-anexo="isAnexo"></download-link>
                        <download-link :code="code" type="sql" :is-anexo="isAnexo"></download-link>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <div class="form-group mb-0">
                            <div class="input-group">
                                <input type="search" class="form-control w-75" placeholder="Buscar" v-model="filter">
                                <select class="custom-select" v-model="pageSize">
                                    <option v-for="t in [5,10,20,50]" :value="t">{{t}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-sm" style="display: table">
                        <thead>
                        <tr>
                            <th v-for="h in headers">{{h.toUpperCase()}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="r in entries">
                            <td v-for="d in r">{{d}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example" v-if="entries.length>0 && pages > 1">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{disabled: page===1 || pages === 0}">
                            <a class="page-link" href="#" tabindex="-1" @click.prevent="page=1">&laquo;</a>
                        </li>
                        <li class="page-item" :class="{disabled: page===1 || pages === 0}">
                            <a class="page-link" href="#" tabindex="-1" @click.prevent="page--">&lsaquo;</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">{{page}}/{{pages}}</a>
                        </li>
                        <li class="page-item" :class="{disabled: page===pages || pages === 0}">
                            <a class="page-link" href="#" @click.prevent="page++">&rsaquo;</a>
                        </li>
                        <li class="page-item" :class="{disabled: page===pages || pages === 0}">
                            <a class="page-link" href="#" @click.prevent="page=pages">&raquo;</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import LoadingIndicator from "./LoadingIndicator";
    import DownloadLink from "./DownloadLink";

    export default {
        name: "DataViewer",
        components: {DownloadLink, LoadingIndicator},
        props: {
            code: String,
            isAnexo: {
                type: Boolean,
                default: true
            },
            rowsPerPage: {
                type: Number,
                default: 5
            },
            autoload: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                responseBody: '',
                loadingResponse: false,
                headers: [],
                rows: [],
                page: 1,
                pageSize: this.rowsPerPage,
                filter: ''
            };
        },
        computed: {
            entries() {
                return this.filteredEntries.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
            },
            filteredEntries() {
                let allRows = this.rows;
                let filteredRows = this.rows;
                if (this.filter) {
                    filteredRows = filteredRows.map(r => r.join(' ')).filter(r => r.toLowerCase().includes(this.filter.trim().toLowerCase()))
                    allRows = allRows.filter(r => filteredRows.includes(r.join(' ')));
                }
                return allRows;
            },
            pages() {
                return Math.ceil(this.filteredEntries.length / this.pageSize);
            }
        },
        mounted() {
            if (this.autoload) {
                this.fetchData();
            }
        },
        methods: {
            getUrl(code) {
                if (this.isAnexo) {
                    return `https://raw.githubusercontent.com/EliuTimana/SunatCatalogos/master/data/08/${code}.json`;
                } else {
                    return `https://raw.githubusercontent.com/EliuTimana/SunatCatalogos/master/data/${code}.json`;
                }
            },
            fetchData() {
                this.page = 1;
                const url = this.getUrl(this.code);
                this.loadingResponse = true;
                fetch(url)
                    .then(r => r.json())
                    .then(data => {
                        this.rows = [];
                        this.headers = [];
                        this.responseBody = data;
                        if (data.length > 0) {
                            this.headers = Object.keys(data[0]);
                            data.forEach(d => {
                                this.rows.push(Object.values(d));
                            });
                            this.loadingResponse = false;
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>
