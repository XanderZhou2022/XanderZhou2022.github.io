module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
	    keywords = @context.registers[:site].config['filtered_bibtex_keywords']

	    keywords.each do |keyword|
		    input = input.gsub(/^.*\b#{keyword}\b *= *\{.*$\n/, '')
	    end

      # Clean superscripts in author lists
      input = input.gsub(/^.*\bauthor\b *= *\{.*$\n/) { |line| line.gsub(/[*†‡§¶‖&^]/, '') }

      # Remove the final field separator and keep the entry brace on that line.
      input = input.sub(/,?[ \t]*\r?\n[ \t]*\}[ \t\r\n]*\z/, "}")

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
