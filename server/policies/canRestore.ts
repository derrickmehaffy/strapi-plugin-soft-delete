import { pluginId } from "../../utils/plugin";

export default (policyContext, config, { strapi }) => {
  const { userAbility } = policyContext.state
  return userAbility.can(`plugin::${pluginId}.explorer.restore`, policyContext.params.uid)
};
