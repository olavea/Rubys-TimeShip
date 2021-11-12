import { createClient } from "@supabase/supabase-js";

/**
 * Travel module
 *
 * 1. Create a project in Supabase
 * 2. Create a table in that project with columns
 *  - Name: id, Type: uuid, Default Value: uuid_generate_v4()
 *  - Name: created_at, Type: timestampz, Default Value: now()
 *  - Name: city, Type: text, Default Value: NULL
 *  - Name: year, Type: int4, Default Value: NULL
 * 3. Get the url and key from Project Settings > API
 *
 * @param {Object} config Config object
 * @param {string} cofig.supabaseUrl Supabase project url
 * @param {string} config.supabaseKey Supabase service_role secret API key
 */
export default ({
  supabaseUrl = process.env.SUPABASE_URL,
  supabaseKey = process.env.SUPABASE_KEY,
} = {}) => {
  const log = (...args) => {
    console.log("Travel:", ...args);
  };

  const supabase = createClient(supabaseUrl, supabaseKey);

  const create = async ({ city, year }) => {
    const travelInfo = { city, year };
    log("Create", travelInfo);

    // Insert docs:
    // https://supabase.io/docs/reference/javascript/insert
    const { data, error } = await supabase.from("travels").insert([travelInfo]);

    if (data) {
      log("Created", data);
    } else {
      throw error;
    }

    return data.id;
  };

  /**
   * List latest travel entries
   *
   * @returns {{city: String, year: String, id: String}[]} Array of latest travels
   */
  const list = async () => {
    log("List");

    // Select docs:
    // https://supabase.io/docs/reference/javascript/select
    const { data, error } = await supabase
      .from("travels")
      .select()
      .order("created_at", { ascending: false })
      .limit(10);

    if (data) {
      log("List count", data.length);
    } else {
      throw error;
    }

    return data;
  };

  return {
    create,
    list,
  };
};