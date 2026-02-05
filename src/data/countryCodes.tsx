import countries from "world-countries";

export const countryCodes = countries
    .filter(c => c.idd?.root)
    .map(c => ({
        name: c.name.common,
        code: c.cca2,
        dial: `${c.idd.root}${c.idd.suffixes?.[0] ?? ""}`,
        flag: c.flag,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
