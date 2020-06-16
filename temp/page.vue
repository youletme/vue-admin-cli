<template>
  <div>
    <pagination-table
      ref="{{lowerName}}-list"
      :table-columns='tableColumns'
      :get-list-url="'/sys/{{lowerName}}/list'"
      :delete-url="''"
      :saveOrUpdateUrl="'/sys/{{lowerName}}'"
      :getFormDateUrl="'/sys/{{lowerName}}/view'"
      :useDefultOperate="false"
      :addOrUpdateDialogWidth="'30%'"
      :onlyCanSaveAndChange="true"
    >

    </pagination-table>

  </div>
</template>

<script>
import PaginationTable from '@/components/pagination-table'

export default {
  data () {
    return {
      tableColumns: [
        {
          prop: 'id',
          headerAlign: 'center',
          align: 'center',
          width: '80',
          label: 'ID',
          notInForm: true
        }
      ]

    }
  },
  components: {
    PaginationTable
  },
  methods: {
  }
}
</script>

<style>

</style>
