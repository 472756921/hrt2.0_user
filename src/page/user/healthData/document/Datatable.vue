<template>
    <div>
      <Collapse v-model="value1" accordion>
        <Panel name="1">
          出院诊断
          <div slot="content">
            <div>检查时间：{{repData.checkTime}}</div>
            <div>登记号：{{repData.checkNum }}</div>
            <div>首次病程记录/诊断意见：{{repData.diagnosis }}</div>
            <div>冠脉造影结果、支架置入个数、部位：{{repData.coronaryAngiographyResults}}{{repData.supportCountPosition }}</div>
          </div>
        </Panel>
        <Panel name="2">
          心脏彩超
          <div slot="content">
            <div>LV：{{repData.lv }}</div>
            <div>LA：{{repData.la}}</div>
            <div>RV：{{repData.rv}}</div>
            <div>RA：{{repData.ra}}</div>
            <div>EF：{{repData.ef}}</div>
          </div>
        </Panel>
        <Panel name="3">
          生化指标
          <div slot="content">
            <div>
              <span class="titleA">丙氨酸氨基转移酶：</span>{{repData.altValues}} IU/L<span class="ckz">（参考值：<{{repData2.altValues_values}}）</span>
            </div>
            <div>
              <span class="titleA">门冬氨酸氨基转移酶：</span>{{repData.astValues}} IU/L<span class="ckz">（参考值：<{{repData2.astValues_values}}）</span>
            </div>
            <div>
              <span class="titleA">总蛋白：</span>{{repData.tpValues }} g/L<span class="ckz">（参考值：{{repData2.albValues_values}}）</span>
            </div>
            <div>
              <span class="titleA">白蛋白：</span>{{repData.albValues}} g/L<span class="ckz">（参考值：{{repData2.alb_values}}）</span>
            </div>
            <div>
              <span class="titleA">葡萄糖：</span>{{repData.glucoseValues }}mmol/L<span class="ckz">（参考值：{{repData2.glucose_values}}）</span>
            </div>
            <div>
              <span class="titleA">尿素：</span>{{repData.ureaValues }}mmol/L<span class="ckz">（参考值：{{repData2.urea_values}}）</span>
            </div>
            <div>
              <span class="titleA">肌酐：</span>{{repData.creValues}}umol/L<span class="ckz">（参考值：{{repData2.cre_values}}）</span>
            </div>
            <div>
              <span class="titleA">估算肾小球滤过率：</span>{{repData.gfrValues }}ml/min/1.73m2<span class="ckz">（参考值：{{repData2.gfr_values}}）</span>
            </div>
            <div>
              <span class="titleA">尿酸：</span>{{repData.uricAcidValues }}umol/L<span class="ckz">（参考值：{{repData2.uric_acid_values}}）</span>
            </div>
            <div>
              <span class="titleA">甘油三脂：</span>{{repData.tgValues }}mmol/L<span class="ckz">（参考值：{{repData2.tg_values}}）</span>
            </div>
            <div>
              <span class="titleA">胆固醇：</span>{{repData.cholesterolValues}}mmol/L<span class="ckz">（参考值：{{repData2.cholesterolValues_values}}）</span>
            </div>
            <div>
              <span class="titleA">高密度脂蛋白：</span>{{repData.hdlValues }}mmol/L<span class="ckz">（参考值：> {{repData2.hdl_values}}）</span>
            </div>
            <div>
              <span class="titleA">低密度脂蛋白：</span>{{repData.ldlValues  }}mmol/L<span class="ckz">（参考值：< {{repData2.ldl_values}}）</span>
            </div>
            <div>
              <span class="titleA">谷氨酰转肽酶：</span>{{repData.ygtValues }}IU/L<span class="ckz">（参考值：< {{repData2.ygt_values}}）</span>
            </div>
            <div>
              <span class="titleA">肌酸激酶：</span>{{repData.ckValues}}IU/L<span class="ckz">（参考值：{{repData2.ck_values}}）</span>
            </div>
            <div>
              <span class="titleA">乳酸脱氢酶：</span>{{repData.ldhValues }}IU/L<span class="ckz">（参考值：{{repData2.ldh_values}}）</span>
            </div>
            <div>
              <span class="titleA">羟丁酸脱氢酶：</span>{{repData.hbdhValues }}IU/L<span class="ckz">（参考值：{{repData2.hbdh_values}}）</span>
            </div>
            <div>
              <span class="titleA">钠：</span>{{repData.proBnpValues  }}mmol/L<span class="ckz">（参考值：{{repData2.na_values}}）</span>
            </div>
            <div>
              <span class="titleA">钾：</span>{{repData.kvalues }}mmol/L<span class="ckz">（参考值：{{repData2.k_values}}）</span>
            </div>
            <div>
              <span class="titleA">氯：</span>{{repData.clValues }}mmol/L<span class="ckz">（参考值：{{repData2.cl_values}}）</span>
            </div>
          </div>
        </Panel>
        <Panel name="4">
          血常规
          <div slot="content">
            <div>
              <span class="titleA">红细胞计数：</span>{{repData.rbcValues }}10^12/L<span class="ckz">（参考值：{{repData2.rbc_values}}）</span>
            </div>
            <div>
              <span class="titleA">血红蛋白：</span>{{repData.hgbValues }}g/L<span class="ckz">（参考值：{{repData2.hgb_values}}）</span>
            </div>
            <div>
              <span class="titleA">血小板计数：</span>{{repData.plateletValues }}10^9/L<span class="ckz">（参考值：{{repData2.platelet_values}}）</span>
            </div>
            <div>
              <span class="titleA">白细胞计数：</span>{{repData.wbcValues }}10^10/L<span class="ckz">（参考值：{{repData2.wbc_values}}）</span>
            </div>
          </div>
        </Panel>
        <Panel name="5">
          心肌标志物
          <div slot="content">
            <div>
              <span class="titleA">肌红蛋白：</span>{{repData.myoValues }}ng/ml<span class="ckz">（参考值：< {{repData2.myo_values}}）</span>
            </div>
            <div>
              <span class="titleA">肌酸激酶同功酶MB质量：</span>{{repData.creatineKinaseIsoenzymesMbValues}}ng/ml<span class="ckz">（参考值：< {{repData2.creatine_kinase_isoenzymes_mb_values}}）</span>
            </div>
            <div>
              <span class="titleA">尿钠素：</span>{{repData.proBnpValues  }}pg/ml<span class="ckz">（参考值：{{repData2.pro_bnp_values}}）</span>
            </div>
            <div>
              <span class="titleA">肌钙蛋白-T：</span>{{repData.tnTValues }}ng/ml<span class="ckz">（参考值：{{repData2.tn_t_values}}）</span>
            </div>
          </div>
        </Panel>
        <Panel name="6">
          大便隐血
          <div slot="content">
            <div>
              <span class="titleA">大便隐血：{{repData.stoolOb }}</span>
            </div>
          </div>
        </Panel>
        <Panel name="7">
          其他
          <div slot="content">
            <div>
              <span class="titleA">其他：{{repData.others }}</span>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
</template>

<script>
    import { getByCustomerCustomerCheckReports } from '../../../../interface';

    export default {
      name: "Datatable",
      data() {
        return {
          value1: '1',
          repData2: {
            altValues_values: 50,
            astValues_values: 40,
            albValues_values: '65-85',
            alb_values: '40-55',
            glucose_values: '3.9-5.9',
            urea_values: '3.82-8.86',
            cre_values: '53-140',
            gfr_values: '56-122',
            uric_acid_values: '240-490',
            tg_values: '0.29-1.83',
            cholesterolValues_values: '2.8-5.7',
            hdl_values: 0.9,
            ldl_values: 4,
            ygt_values: 60,
            ck_values: '19-226',
            ldh_values: '110-220',
            hbdh_values: '72-182',
            na_values: '137-147',
            k_values: '3.5-5.3',
            cl_values: '99-110',
            rbc_values: '4.3-5.8',
            hgb_values: '130-175',
            platelet_values: '100-300',
            wbc_values: '3.9-9.5',
            myo_values: '72',
            creatine_kinase_isoenzymes_mb_values: '4.94',
            pro_bnp_values: '0-227',
            tn_t_values: '0-14',
          },
          repData:   {
            albValues: '',
            altValues: '',
            astValues: '',
            checkNum: '',
            checkTime: '',
            cholesterolValues: '',
            ckValues: '',
            clValues: '',
            coronaryAngiographyResults: '',
            creValues: '',
            creatineKinaseIsoenzymesMbValues: '',
            diagnosis: '',
            ef: '',
            gfrValues: '',
            glucoseValues: '',
            hbdhValues: '',
            hdlValues: '',
            hgbValues: '',
            id: 0,
            kvalues: '',
            la: '',
            ldhValues: '',
            ldlValues: '',
            lv: '',
            myoValues: '',
            naValues: '',
            others: '',
            plateletValues: '',
            proBnpValues: '',
            ra: '',
            rbcValues: '',
            rv: '',
            stoolOb: '',
            supportCountPosition: '',
            tgValues: '',
            tnTValues: '',
            tpValues: '',
            ureaValues: '',
            uricAcidValues: '',
            wbcValues: '',
            ygtValues: '',
          },
        };
      },
      created() {
        this.getData();
      },
      methods: {
        getData(value) {
          this.$ajax({
            method: 'get',
            url:getByCustomerCustomerCheckReports(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.repData = res.data.data[0];
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
      },
    }
</script>

<style scoped>

</style>
