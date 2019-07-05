<template>
    <div class="card">
        <div class="card-head">
            <h3>#{{info.id}} <span class="cap">{{info.species.name}}</span></h3>
        </div>
        <div class="card-body">
            <div class="text-right">
                <router-link to="/pokemon">&lt; Back</router-link>
            </div>
            <div class="top-info">
                <img :src="info.sprites.front_default" />
                <!-- <img :src="info.sprites.back_default" /> -->
                <span class="types">
                    <span>
                        <span v-for="(type, index) in types" :key="index" class="cap type">
                            <span
                            class="class"
                            :class="{
                                normal:type.type.name=='normal',
                                fire:type.type.name=='fire',
                                fighting:type.type.name=='fighting',
                                water:type.type.name=='water',
                                flying:type.type.name=='flying',
                                grass:type.type.name=='grass',
                                poison:type.type.name=='poison',
                                electric:type.type.name=='electric',
                                ground:type.type.name=='ground',
                                psychic:type.type.name=='psychic',
                                rock:type.type.name=='rock',
                                ice:type.type.name=='ice',
                                bug:type.type.name=='bug',
                                dragon:type.type.name=='dragon',
                                ghost:type.type.name=='ghost',
                                dark: type.type.name=='dark',
                                steel: type.type.name=='steel',
                                fairy: type.type.name=='fairy'
                            }">{{type.type.name}}</span>
                            <span v-if="index != info.types.length-1">/ </span>
                        </span>
                    </span>
                </span>

                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Base Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="hp">HP</th>
                            <td>{{info.stats[5].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="atk">Attack</th>
                            <td>{{info.stats[4].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="def">Defense</th>
                            <td>{{info.stats[3].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="satk">Special Attack</th>
                            <td>{{info.stats[2].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="sdef">Special Defense</th>
                            <td>{{info.stats[1].base_stat}}</td>
                        </tr>
                        <tr>
                            <th class="spd">Speed</th>
                            <td>{{info.stats[0].base_stat}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonDetail",
    props: ["info"],
    data() {
        return {
        }
    },
    methods: {
      
    },
    computed: {
        types: function () {            
            return this.info.types.slice().sort((a, b) => a.slot - b.slot);
        }
    }
}
</script>

<style scoped>
    img {
        width: 128px;
        float: left;
    }
    .types {
        display: grid;
        align-items: center;
    }
    table thead th {
        text-align: center;
    }
    .top-info {
        display: grid;
        grid-template-columns: 128px 1fr;
        grid-template-rows: 128px 1fr;
    }
    .top-info table {
        grid-column: span 2;
    }
    @media screen and (min-width: 651px) {
        .top-info {
            grid-template-columns: 140px 1fr;
            grid-template-rows: 128px 1fr;
        }
        .top-info table {
            grid-column: 2 / -1;
            grid-row: 1 / -1;
        }
    }
</style>
